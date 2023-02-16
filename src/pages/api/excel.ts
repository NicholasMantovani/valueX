// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as XLSX from 'xlsx';


type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { fileName } = req.query
    const url = "https://sheetjs.com/data/executive.json";
    const raw_data = await (await fetch(url)).json();

    /* filter for the Presidents */
    //const prez = raw_data.filter((row: { terms: any[]; }) => row.terms.some((term: { type: string; }) => term.type === "prez"));

    /* flatten objects */
    const rows = raw_data.map((row: { name: { first: string; last: string; }; bio: { birthday: any; }; }) => ({
        name: row.name.first + " " + row.name.last,
        birthday: row.bio.birthday
    }));

    /* generate worksheet and workbook */
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Dates");

    /* fix headers */
    XLSX.utils.sheet_add_aoa(worksheet, [["Name", "Birthday"]], { origin: "A1" });

    /* calculate column width */
    const max_width = rows.reduce((w: number, r: { name: string | any[]; }) => Math.max(w, r.name.length), 10);
    worksheet["!cols"] = [{ wch: max_width }];

    /* create an XLSX file and try to save to Presidents.xlsx */
    const buf = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });


    res.status(200);
    res.setHeader('Content-Disposition', 'attachment; filename="' + fileName + '"');
    res.setHeader('Content-Type', 'application/vnd.ms-excel');
    res.end(buf);
}
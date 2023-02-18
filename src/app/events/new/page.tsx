'use client'
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    title: string,
    description: string,
    date: string,
    duration: number
};


export default function NewEvent() {
    const labelClass = "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <>
            <section className="flex justify-center flex-col items-center bg-white">
                <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className={labelClass}>
                                Titolo
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Il titolo del prossimo progetto evento Valuex" {...register("title", { required: true })} />
                            {errors.title && <p className="text-red-500 text-xs italic">Il titolo è richiesto.</p>}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className={labelClass} >
                                Descrizione
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="La descrizione del prossimo progetto evento Valuex" {...register("description", { required: true })} />
                            {errors.description && <p className="text-red-500 text-xs italic">La descrizione è richiesta.</p>}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className={labelClass}>
                                Data
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="2023-02-18" {...register("date", { required: true, pattern: /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/ })} />
                            {errors.date && <p className="text-red-500 text-xs italic">La data è richiesta e deve essere in formato yyyy-mm-dd.</p>}
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className={labelClass}>
                                Durata
                            </label>
                            <div className="relative">
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" {...register("duration", { required: true })}>
                                    <option>1 Ora</option>
                                    <option>2 Ore</option>
                                    <option>3 Ore</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                                {errors.duration && <p className="text-red-500 text-xs italic">La durata è richiesta.</p>}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6 text-center">
                        <div className="w-full px-3">
                            <button className="bg-orange-500 hover:bg-white text-black font-bold py-2 px-4 rounded-full" type="submit">
                                Invia
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}
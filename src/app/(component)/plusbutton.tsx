export function Plusbutton({ ...props }) {
    return <button className="bg-orange-500 hover:bg-white text-black font-bold text-3xl w-16 h-16 rounded-full fixed right-3 bottom-2 shadow-md animate-bounce" type={props.type}>
        +
    </button>;
}

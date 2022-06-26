

export default function Button({children, onClick, className=''}) {
    return (
        <button className={`w-fit h-fit p-3 rounded duration-300 ease-in bg-opacity-50 bg-slate-400 hover:bg-slate-300 dark:bg-slate-600 hover:dark:bg-slate-500 ${className}`} onClick={onClick}><a>{children}</a></button>
    )


}
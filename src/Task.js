import './task.css'

export function TaskCard({ready}) {
    return <div className='card'>
        <h1>Mi primer tarea </h1>
        <span
        style={ready ? {background:'#4f9c3aff', color:'#000000'}: {background:'#341fc2ff', color:'#fff'}}
        >
 {ready ? 'Tarea Realizada':'Tarea Pendiente'}
        </span>
    </div>
}
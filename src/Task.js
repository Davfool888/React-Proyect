import './task.css'

export function TaskCard({ready}) {
    return <div className='card'>
        <h1>Mi primer tarea </h1>
        <span className={ready ? 'bg_red': 'bg_green'}>
 {ready ? 'Tarea Realizada':'Tarea Pendiente'}
        </span>
    </div>
}
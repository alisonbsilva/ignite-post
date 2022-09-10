import style from './Avatar.module.css'


export function Avatar({ hasBorder = true, src }){
    //const hasBorder = props.hasBorder !== false
    return(
        <img className={hasBorder ? style.avatarWithBorder : style.avatar} 
        src={src} 
        />
    )
}
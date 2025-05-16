import AvatarPhoto from "../../assets/foto.jpg"

export default function Avatar() {
    return (
        <div className="rounded-full h-[128px] w-[128px] bg-red-500 overflow-hidden absolute top-20">
            <img src={AvatarPhoto} className="object-cover h-full w-full" />
        </div>
    )
}
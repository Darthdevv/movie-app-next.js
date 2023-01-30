import Link from "next/link"
import Image from "next/image"

export default function Movie({ id, title, release_date, poster_path }) {
    const imagePath = "https://image.tmdb.org/t/p/original"
    console.log(poster_path);
    return (
        <div>
            <h1>{title}</h1>
            <h2  className="mb-2">{release_date} </h2>
            <Link href={`/${id}`}>
                <Image src={imagePath + poster_path}
                    width={800}
                    height={800}
                    alt={title}
                >
                </Image>
            </Link>
        </div>
    )
}


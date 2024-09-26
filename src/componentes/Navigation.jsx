import { Link } from "react-router-dom"
import { Foto1 } from "./foto1"
import { Foto2 } from "./foto2"
import { Foto3 } from "./foto3"
import { Foto4 } from "./foto4"
import { Foto5 } from "./foto5"
import { Foto6 } from "./foto6"

export const Navigation = () => {
  return (
    <div className="container thumbnail-container mt-2">
        <Link to='/foto1' className="links">
            <figure className="thumbnail-image-size">
                <Foto1 />
                <figcaption>Recuerdos 1</figcaption>
            </figure>

        </Link>
        <Link to='/foto2' className="links">
            <figure className="thumbnail-image-size">
                <Foto2 />
                <figcaption>Recuerdos 2</figcaption>
            </figure>

        </Link>
        <Link to='/foto3' className="links">
            <figure className="thumbnail-image-size">
                <Foto3 />
                <figcaption>Recuerdos 1</figcaption>
            </figure>

        </Link>
        <Link to='/foto4' className="links">
            <figure className="thumbnail-image-size">
                <Foto4 />
                <figcaption>Recuerdos 1</figcaption>
            </figure>

        </Link>
        <Link to='/foto5' className="links">
            <figure className="thumbnail-image-size">
                <Foto5 />
                <figcaption>Recuerdos 1</figcaption>
            </figure>

        </Link>
        <Link to='/foto6' className="links">
            <figure className="thumbnail-image-size">
                <Foto6 />
                <figcaption>Recuerdos 1</figcaption>
            </figure>

        </Link>

    </div>
  )
}

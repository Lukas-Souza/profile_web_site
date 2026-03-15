import "@/components/networking/index.css"
import Image from "next/image"
import ImgenLinkdin from "@/assets/linkedin.png"
import ImagenGitHub from "@/assets/github.png"
import ImagenLattes from "@/assets/Lattes.png"

export default function Networking(){
    return(
        <>
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/lucas-henriquedelima/" target="blanck">
                    
      <Image
      src={ImgenLinkdin}
      height={50}
      width={50}
      alt="Imagen profile"
      />
                </a>
            </li>

            <li>
                <a href="https://github.com/Lukas-Souza" target="blanck">

      <Image
      src={ImagenGitHub}
       height={50}
      width={50}
      alt="Imagen profile"
      />
                </a>
            </li>

            <li>
                <a href="" target="blanck">

      <Image
      src={ImagenLattes}
       height={50}
      width={50}
      alt="Imagen profile"
      />
                </a>
            </li>
        </ul>
        </>
    )
}
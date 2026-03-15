import Image from "next/image"
import img from "../assets/profileImage.jpeg";
import "@/app/globals.css"
import Paragrafos from "./paragrafos/paragrafos";
import Networking from "@/components/networking/networking"

export default function Profile(){
    return(
        <div className="profile">

      <Image
      id="profile"
      src={img}
      height={150}
      width={150}
      alt="Imagen profile"
      />
        <h1
        >Lucas Henrique de Lima Souza</h1>
        <h2>System develop</h2>
        <Paragrafos/>
      <Networking></Networking>

        </div>
    )
}
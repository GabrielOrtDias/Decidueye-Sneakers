import { useLayoutEffect, useRef  } from "react"
import { gsap } from "gsap";   
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import newBalance550 from './assets/newBalance550.png'
import newBalance550Red from './assets/newBalance550Red.png'
import './style/content.css'

export function Content({red, setRed}){

    const comp = useRef(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#viewpoint",
                    start: "5% top", // Inicia a animação quando o topo do #viewpoint atinge o topo da viewport
                    end: "100% bottom", // Termina a animação quando o final do #viewpoint atinge o final da viewport
                    scrub: true,
                }
            });
            tl.to('#sneaker', {
                top: "115%",
                left: "20%",
            });
            tl.to('#sneaker', {
                top: "220%",
                left: "45%"
            })
        }, comp);
    
        return () => ctx.revert();
    }, []);
    

    return(
        <div className="h-[2370px] w-full font-montserrat" id="viewpoint" ref={comp}>
            <img src={red ? newBalance550Red : newBalance550} className='w-4/12' id='sneaker'/>
            <div id='view1' className={`h-[790px] ${red ? "bg-crimson-3 text-crimson-1" :"bg-forest-2 text-sky-2"}  pt-20`}>
                <div className='mt-20 ml-40 w-[45%] space-y-2 text-lg'>
                <h1 className='text-5xl font-bold'>New Balance 550 {red ? "Red" : "Green" }</h1>
                <p>O New Balance 550 é um clássico do design esportivo, originalmente lançado nos anos 1980. Com um visual retrô, o modelo foi inicialmente concebido como um tênis de basquete, mas sua estética atemporal e versatilidade fizeram com que ele ganhasse popularidade também fora das quadras. </p>
                <p>Conhecido pelo seu conforto e durabilidade, o 550 combina couro, camurça e malha em sua construção, proporcionando um visual robusto e ao mesmo tempo elegante. Relançado recentemente, o New Balance 550 se tornou um ícone da moda urbana, sendo uma escolha popular entre os amantes de streetwear e colecionadores de sneakers.</p>
                </div>
            </div>
            <div id='view2' className={`h-[790px] ${red  ? "bg-crimson-2 text-crimson-4" : "bg-forest-3 text-sky-3"}  pt-20 flex items-center justify-end`}>
                <div className='w-[45%] space-y-2 mr-20 items-center flex flex-col'>
                <h1 className='text-4xl font-bold'>New Balance 550 {red? "Red" : "Green"}</h1>
                <span className="text-3xl">$109.99</span>
                <button className="bg-forest-2 w-3/12 text-3xl rounded-md py-2">Buy</button>
                </div>
            </div>
            <div id='view3' className={`h-[790px] ${red ? "bg-crimson-5" : "bg-bg"}  pt-20 flex items-center justify-end text-3xl`}>
               <div className="w-full"></div>
               <div className="w-3/12 text-center">{red ? <button className="h-20 w-20 bg-sky-2 rounded-full" onClick={()=>{setRed(false)}}/> : <button className="h-20 w-20 bg-crimson-3 rounded-full" onClick={()=>{setRed(true)}}/>}</div>
            </div>
        </div>
    )
}
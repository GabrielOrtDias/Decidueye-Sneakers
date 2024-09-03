import { useLayoutEffect, useRef  } from "react"
import { gsap } from "gsap";   
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import newBalance550 from './assets/newBalance550.png'
import './style/content.css'

export function Content(){

    const comp = useRef(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#viewpoint",
                    start: "5% top", // Inicia a animação quando o topo do #viewpoint atinge o topo da viewport
                    end: "100% bottom", // Termina a animação quando o final do #viewpoint atinge o final da viewport
                    scrub: true,
                    markers: true,
                }
            });
            tl.to('#sneaker', {
                top: "120%",
                left: "20%",
            });
            tl.to('#sneaker', {
                top: "225%",
                left: "45%"
            })
        }, comp);
    
        return () => ctx.revert();
    }, []);
    

    return(
        <div className="h-[3000px] w-full font-montserrat" id="viewpoint" ref={comp}>
            <img src={newBalance550} className='w-4/12' id='sneaker'/>
            <div id='view1' className='h-[1000px] bg-forest-2 pt-20 text-sky-2'>
                <div className='mt-20 ml-40 w-[45%] space-y-2 text-lg'>
                <h1 className='text-5xl font-bold'>New Balance 550 Green</h1>
                <p>O New Balance 550 é um clássico do design esportivo, originalmente lançado nos anos 1980. Com um visual retrô, o modelo foi inicialmente concebido como um tênis de basquete, mas sua estética atemporal e versatilidade fizeram com que ele ganhasse popularidade também fora das quadras. </p>
                <p>Conhecido pelo seu conforto e durabilidade, o 550 combina couro, camurça e malha em sua construção, proporcionando um visual robusto e ao mesmo tempo elegante. Relançado recentemente, o New Balance 550 se tornou um ícone da moda urbana, sendo uma escolha popular entre os amantes de streetwear e colecionadores de sneakers.</p>
                </div>
            </div>
            <div id='view2' className='h-[1000px] bg-forest-3 text-sky-3 pt-20 flex items-center justify-end'>
                <div className='w-[45%] space-y-2 mr-20 items-center flex flex-col'>
                <h1 className='text-4xl font-bold'>New Balance 550 Green</h1>
                <span className="text-3xl">$109.99</span>
                <button className="bg-forest-2 w-3/12 text-3xl rounded-md py-2">Buy</button>
                </div>
            </div>
            <div id='view3' className='h-[1000px] bg-bg text-sky-3 pt-20 flex items-center justify-end'>
                <div className="w-2/6 text-center text-3xl"><button><i className="ri-arrow-left-wide-line"/></button></div>
                <div className="w-2/6"></div>
                <div className="w-2/6 text-center text-3xl"><button><i className="ri-arrow-right-wide-line"/></button></div>
            </div>
        </div>
    )
}
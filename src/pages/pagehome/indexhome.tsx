import { Boxmain } from "./StylesHome"
import profileimg from "../../images/profileimg.jpg"
import ebookicon from "../../images/ebookicon.png"
import iconwhatsapp from "../../images/iconwhatsapp.png"
import iconyoutube from "../../images/iconyoutube.png"
import icontiktok from "../../images/icontiktok.png"
import iconacha from "../../images/iconacha.png"
import iconinsta from "../../images/iconinsta.WEBP"
import { Heart } from "phosphor-react"
import { IconWeight } from "phosphor-react"
import { LinksButton, navegation } from "../../components/LinkstButton"





  //função de icones do phosphor-react 

  const HeartIcon = ({ size = 48, color = "#FF0000", weight = "fill" as IconWeight }) => {
    return (
      <Heart size={size} color={color} weight={weight} />
    );
  };

  export default HeartIcon;



export function Home () {


      
      // função de animação de onda
    
      const WaveText = () => {

      
        return (
            <div className="text-description-profile">
                {Array.from("LoLa Links").map((char, index) => (
                    <span key={index}
                      className={['L', 'o', 'a', 'i', 'n', 'k', 's'].includes(char) ? 'Letras-char' : ''} // Adiciona a classe 'L-char' se o caractere for uma das letras especificadas
                      style={{ display: 'inline-block', animation: 'wave 1s ease-in-out infinite', animationDelay: `${index * 0.1}s` }}>
                        {char === ' ' ? '\u00A0' : char} {/* Adiciona um espaço não quebrável */}
                    </span>
                ))}
            </div>
        );
    };
    

    // Adicione a regra @keyframes diretamente ao head do documento
    const addKeyframes = () => {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(`
            @keyframes wave {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
        `));
        document.head.appendChild(style);
    };

    // Chame a função para adicionar os keyframes
    addKeyframes();

   

    return (
            <Boxmain>
                <div id="box2">
                    {/*conteudo do cabeçalho */}
                    <div id="header">
                        <div id="profile">
                            <img id="profileimg" src={profileimg} alt="Imagem de perfil"/>
                        </div>
                        <div id="box-description-profile">
                          <h1 id="text-description-profile" > <WaveText/> </h1>
                        </div>
                    </div>
                    {/*primeira linha da caixa de links  */}
                    <div id="boxlinks"> 
                      
                        <LinksButton
                          text="Ebook Introdução Alimentar de forma leve"
                          icon={ebookicon}
                          link="https://hotmart.com/pt-br/marketplace/produtos/introducao-alimentar-de-forma-leve/U88019896P?fbclid=PAZXh0bgNhZW0CMTEAAabiI7tvFHjh7ICoN2M93mzpKSusq8kqTPpDiF8VS5oRIHxNOO145SOQqP0_aem_IDCSbH753lIAzsSqw0QlGw"
                        />

                         {/*segunda linha da caixa de links  */}


                        <LinksButton 
                          text="Grupo no whatsApp de promoções"
                          icon={iconwhatsapp}
                          link="https://chat.whatsapp.com/L6jzf9WgMOUG6ZzyQF6gaW?fbclid=PAZXh0bgNhZW0CMTEAAaaUdY_lzS1D3o4vEPzlUBEI6zprFxnTvQllax_UlTjC_VRloVKBX-jt7Qc_aem_JEx4SmiUCFz_6ZI3cPosgQ"
                        />

                        {/*terceira linha da caixa de links */}

                        <LinksButton 
                          text="Canal no Youtube"
                          icon={iconyoutube}
                          link="https://www.youtube.com/@lorenafarias188"
                        />

                        {/*quarta linha da caixa de links  */}

                          
                        <LinksButton 
                          text="Meu Tiktok"
                          icon={icontiktok}
                          link="https://www.tiktok.com/@lorenaafarias_"
                        />

                        {/*quinta linha da caixa de links  */}                        

                        <LinksButton 
                          text="Achadinhos"
                          icon={iconacha}
                          nav={navegation()} 
                        />

                    </div>

                        {/* link do instagram */}

                        <div  id="containerinsta" >  
                          <a href="https://www.instagram.com/lorenaafarias_/"   target='_blank'>
                                <img id="icon-insta" src={iconinsta} alt="icone insta"></img>
                          </a>
                        </div>
                </div>
          
                <div id="author" onClick={()=> window.open('https://www.instagram.com/m.wallas_/')}>
                  <p>Made with <HeartIcon size={15} color = "#9c23a9"/> by Mateus Wallas </p>
                </div>
             
           </Boxmain>
    )
}


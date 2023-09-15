import Layout from "@/components/layout";
import { useState } from "react";

export default function Home() {
  const [className, setClassName] = useState('hide');
  const [name, setName] = useState('Show');
  const changeClassName = ()=>{
    if(className == 'hide'){
      setClassName('show');
      setName('Hide');
    } else {
      setClassName('hide');
      setName('Show');
    }
  }
  return (
    <Layout title={'ECOMMARK'}>
      <header>
        <h1>Ecommark</h1>
        <p>Marketing Digital</p>
      </header>

      <div class={`container ${className}`}>
        <button className="fixed bg-teal-950 p-5 rounded-xl text-white -translate-x-60" onClick={changeClassName}>{name}</button>
        <h2 class='font-bold'>Bienvenido a Ecommark</h2>
        <p>Somos una empresa de marketing dedicada a ayudarte a crecer tu negocio en línea. Ofrecemos servicios de marketing digital, publicidad en redes sociales y visibilidad en internet.</p>
        <p>¡Confía en nosotros para llevar tu negocio al siguiente nivel!</p>
        <a href="https://wa.me/+595982556118" class="btn">Contacta con Nosotros</a>
        <h2 className=" text-center font-bold">Algunos trabajos que hemos realizado</h2>
        <div class="services">
          <div class="service">
            <img src="/evebeuty_studio.jpeg" alt="Servicio 1" />
            <h3>evebeuty_studio</h3>
            <p>Descripción del Servicio 1.</p>
          </div>
          <div class="service">
            <img src="https://st.depositphotos.com/1033604/2008/i/450/depositphotos_20087151-stock-photo-beautiful-lake-with-mountains-in.jpg" alt="Servicio 2" />
            <h3>Servicio 2</h3>
            <p>Descripción del Servicio 2.</p>
          </div>
          <div class="service">
            <img src="https://st.depositphotos.com/1033604/2008/i/450/depositphotos_20087151-stock-photo-beautiful-lake-with-mountains-in.jpg" alt="Servicio 3" />
            <h3>Servicio 3</h3>
            <p>Descripción del Servicio 3.</p>
          </div>
          <div class="service">
            <img src="https://st.depositphotos.com/1033604/2008/i/450/depositphotos_20087151-stock-photo-beautiful-lake-with-mountains-in.jpg" alt="Servicio 3" />
            <h3>Servicio 3</h3>
            <p>Descripción del Servicio 3.</p>
          </div>
          <div class="service">
            <img src="https://st.depositphotos.com/1033604/2008/i/450/depositphotos_20087151-stock-photo-beautiful-lake-with-mountains-in.jpg" alt="Servicio 3" />
            <h3>Servicio 3</h3>
            <p>Descripción del Servicio 3.</p>
          </div>
          <div class="service">
            <img src="https://st.depositphotos.com/1033604/2008/i/450/depositphotos_20087151-stock-photo-beautiful-lake-with-mountains-in.jpg" alt="Servicio 3" />
            <h3>Servicio 3</h3>
            <p>Descripción del Servicio 3.</p>
          </div>
          <div class="service">
            <img src="https://st.depositphotos.com/1033604/2008/i/450/depositphotos_20087151-stock-photo-beautiful-lake-with-mountains-in.jpg" alt="Servicio 3" />
            <h3>Servicio 3</h3>
            <p>Descripción del Servicio 3.</p>
          </div>
          <div class="service">
            <img src="https://st.depositphotos.com/1033604/2008/i/450/depositphotos_20087151-stock-photo-beautiful-lake-with-mountains-in.jpg" alt="Servicio 3" />
            <h3>Servicio 3</h3>
            <p>Descripción del Servicio 3.</p>
          </div>
          <div class="service">
            <img src="https://st.depositphotos.com/1033604/2008/i/450/depositphotos_20087151-stock-photo-beautiful-lake-with-mountains-in.jpg" alt="Servicio 3" />
            <h3>Servicio 3</h3>
            <p>Descripción del Servicio 3.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

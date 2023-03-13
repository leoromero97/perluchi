import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { INFO_CONTACT } from "../../constants/infoContact";

function Contact() {
  return (
    <Layout>
      <div className="flex flex-col max-w-screen-xl w-full gap-10 py-8 px-4 text-yellow-900 pt-32">
        <h1 className="text-3xl md:text-5xl font-semibold text-center">Contacto</h1>
        <div className="flex flex-col bg-white w-full border-2 rounded-2xl gap-6">
          <div className="flex flex-col w-full p-4 gap-2 ">
            <h3 className="text-yellow-700 text-2xl font-semibold">
              Ubicación
            </h3>
            <p className="text-base">
              Nos encontramos en
              <strong> San Pedrito 3301, Villa Soldati, CABA.</strong>
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.68769545483!2d-58.438893048764115!3d-34.66258926802734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb1fe78a4493%3A0xc300a3a192af13e5!2sPerluchi!5e0!3m2!1ses-419!2sar!4v1678595870963!5m2!1ses-419!2sar"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="location"
              className="rounded-md"
            ></iframe>
          </div>
          <div className="flex flex-col w-full p-4 gap-2">
            <h3 className="text-yellow-700 text-2xl font-semibold">
              Horarios
            </h3>
            <p className="text-base">
              Nuestros días y horarios de atención son de
              <strong> lunes a viernes, de 11 a 16 horas.</strong>
            </p>
          </div>
          <div className="flex flex-col w-full p-4 gap-2">
            <h3 className="text-yellow-700 text-2xl font-semibold">
              Teléfono y redes
            </h3>
            <ul className="flex flex-col gap-4">
              {INFO_CONTACT.map((item) => (
                <Link key={item.id} to={item.slug} target="_blank" className="flex gap-2">
                  <img src={item.icon} alt={item.iconAlt} className="h-6 w-6" />
                  <p className="text-base">{item.label}</p>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;

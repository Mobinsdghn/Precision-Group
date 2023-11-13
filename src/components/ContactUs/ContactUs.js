import Icon from "react-icons-kit";
import {iosEmail} from 'react-icons-kit/ionicons/iosEmail'
import {socialWhatsappOutline} from 'react-icons-kit/ionicons/socialWhatsappOutline'
import {iosTelephone} from 'react-icons-kit/ionicons/iosTelephone'
const ContactUs = () => {
  return (
    <>
      <div
        className="container w-75 bg-light rounded-9 mt-5 mb-5"
        style={{ height: "auto", boxShadow: "5px 5px 15px 4px #E0F4FF" }}
      >
        <h1
          className="mx-5 px-5 py-5 "
          style={{
            fontFamily: "membra",
            letterSpacing: "20px",
            wordSpacing: "55px",
            borderBottom: "solid 5px #E0F4FF",
          }}
        >
          Contact with us
        </h1>
        <section className="h-auto p-2">
            <ul style={{listStyle:"none" ,fontFamily:"me",fontWeight:"900"}} className="mt-5 d-flex flex-column ">
                <li className="m-3 ">
                    <a href="" className="btn mx-5 ">
                        <Icon icon={iosEmail} className="px-2"/>
                        Email
                    </a>
                    <span className="">example@x.com</span>
                </li>
                <li className="m-3 align-self-center">
                    <a href="" className="btn mx-5 ">
                        <Icon icon={socialWhatsappOutline} className="px-2"/>
                        Whatsapp
                    </a>
                    <span className="">0912345678</span>
                </li>
                <li className="m-3 align-self-end">
                    <a href="" className="btn mx-5 ">
                        <Icon icon={iosTelephone} className="px-2"/>
                        Telephone
                    </a>
                    <span className="">0912345678</span>
                </li>
            </ul>
        </section>
      </div>
      <hr />
    </>
  );
};

export default ContactUs;

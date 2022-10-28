import Styles from '../styles/About.module.css'
import Meta from './Meta'

export default function Home() {
  return (
    <>
      <Meta title="Home" description="Home ipsum dolor sit amet" keywords="Home ipsum dolor sit amet" />
      
      <div className={Styles.container}>
            <h1 className={Styles.title}>Home Page </h1>
            <p>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non lorem quis est porttitor vestibulum. Duis vel dolor at tellus pharetra luctus a non dui. Curabitur rhoncus ultricies ullamcorper. Aliquam venenatis vulputate lectus, sit amet commodo odio faucibus ac. In imperdiet turpis et sollicitudin condimentum. Vestibulum et convallis tellus. Mauris.


            </p>

        </div>

       
    </>
  )
}



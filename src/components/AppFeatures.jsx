import React, { useState } from 'react'
import YourCards from '../assets/images/page-2-preview.svg'
import AppProsItem from './AppProsItem'

const AppFeatures = () => {

    const [appProsItems, setAppProsItems] = useState([
        {imageUrl: "./icons/easy-payments.svg", imageAlt: "Card icon", title: "Easy Payments", content: "Id mollis consectetur congue egestas egestas suspendisse blandit justo."},
        {imageUrl: "./icons/data-security.svg", imageAlt: "Security icon", title: "Data Security", content: "Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. "},
        {imageUrl: "./icons/cost-stats.svg", imageAlt: "Statistics icon", title: "Cost Statistics", content: "Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh."},
        {imageUrl: "./icons/support.svg", imageAlt: "Support icon", title: "Support 24/7", content: "A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris."},
        {imageUrl: "./icons/cashback.svg", imageAlt: "Wallet icon", title: "Regular Cashback", content: "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend."},
        {imageUrl: "./icons/top-standards.svg", imageAlt: "Smiley icon", title: "Top Standards", content: "Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu."},
    ])

  return (
    <section className="app-features">
      <div className="container">
          <img className="your-cards" src={YourCards} alt="" />

          <div className="content">
              <h2>App Features</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
              <div className="app-pros">
                  
                {
                    appProsItems.map((item, index) => <AppProsItem key={index} item={item} />)
                }

              </div>
          </div>

      </div>
    </section>
  )
}

export default AppFeatures
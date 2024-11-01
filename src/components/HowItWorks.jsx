import React from 'react'
import BudgetPreview from '../assets/images/page-3-budget.svg'
import CardsPreview from '../assets/images/page-3-cards.svg'
import TransferPreview from '../assets/images/page-3-transfer.svg'

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How Does It Work?</h2>

      <div className="iphone-app-preview">
          <img src={BudgetPreview} alt="Iphone app budget page preview" />
          <img src={CardsPreview} alt="Iphone app cards page preview" />
          <img src={TransferPreview} alt="Iphone app transfer page preview" />
      </div>
      
      <h3>Latest transaction history</h3>
      <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>
    </section>
  )
}

export default HowItWorks
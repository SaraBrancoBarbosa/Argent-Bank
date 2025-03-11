import PropTypes from "prop-types"
import "./accountCard.css"

function AccountCard({title, amount, description}) {
  return (
    <section className="account">
        <div className="account-content-wrapper">
            <h3 className="account-title">{title}</h3>
            <p className="account-amount">${amount}</p>
            <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
            <button className="button">View transactions</button>
        </div>
    </section>
  )
}

AccountCard.propTypes = {
	title: PropTypes.string,
	amount: PropTypes.string,
	description: PropTypes.string,
}

export default AccountCard

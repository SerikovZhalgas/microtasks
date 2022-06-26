
type FooterType = {
    goals: number
}

const Footer = (props: FooterType) => {
    return (
        <div>{props.goals}</div>
    )
}

export default Footer;
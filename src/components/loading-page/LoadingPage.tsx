import './LoadingPage.css'

interface ILoadingPageProps {
    showLoading?: boolean
}
const LoadingPage = (props: ILoadingPageProps) => {
    const { showLoading } = props
    return (
        <div id="loading-page-component" className={`loading-page bg-[#0a3252] fade-in-section ${showLoading ? 'visible' : 'text-animation-hidden loading-hidden'}`}>
            <div className="lds-spinner loading-logo">
                <img className='' src='/images/logos/favicon.png' alt="logo alana city"/>
            </div>
        </div>
    )
}

export const ShowLoading = () =>{
    document.getElementById("loading-page-component")?.classList.remove("loading-hidden")
    document.getElementById("loading-page-component")?.classList.remove("text-animation-hidden")
    document.getElementById("loading-page-component")?.classList.add("visible")
} 
export const HidenLoading = () =>{
    document.getElementById("loading-page-component")?.classList.add("text-animation-hidden")
    document.getElementById("loading-page-component")?.classList.add("loading-hidden")
    document.getElementById("loading-page-component")?.classList.remove("visible")
} 

export default LoadingPage
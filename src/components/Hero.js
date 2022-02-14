export const HeroContainer = ({ children, className }) => (
    <div className={`${className} hero bg-base-200 my-20`}>{children}</div>
)
export const HeroContent = ({ children }) => (
    <div className="flex-col hero-content lg:flex-row-reverse">{children}</div>
)
export const HeroImage = props => (
    <>
        <img
            src={props.src}
            className="max-w-sm rounded-lg shadow-2xl"
        />
    </>
)
export const HeroTitle = props => (
    <>
        <h1 className="mb-5 text-6xl font-bold">{props.title}</h1>
    </>
)
export const HeroDescription = props => (
    <>
        <p className="mb-5 text-2xl">{props.description}</p>
    </>
)

{
    /* <div className="hero min-h-screen bg-base-200">
        <div className="flex-col hero-content lg:flex-row-reverse">
            <img
                src="https://picsum.photos/id/1005/600/600"
                className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
                <h1 className="mb-5 text-6xl font-bold">{props.title}</h1>
                <p className="mb-5 text-3xl">{props.description}</p>
            </div>
        </div>
    </div> */
}

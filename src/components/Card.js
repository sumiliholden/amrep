export const CardContainer = ({ children }) => (
    <div className="card card-bordered">{children}</div>
)
export const CardBody = ({ children }) => <div className="card-body">{children}</div>
export const CardTitle = props => <h2 className="card-title">{props.title}</h2>
export const CardDescription = props => (
    <>
        <p>{props.description}</p>
    </>
)
export const CardActions = ({ children }) => (
    <div className="justify-end card-actions"> {children}</div>
)

{
    /* <div className="card card-bordered">
            <figure>
                <img src="https://picsum.photos/id/1005/400/250" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    Top image
                    <div className="badge mx-2 badge-secondary">
                        NEW
                    </div>
                </h2>
                <p>
                    Rerum reiciendis beatae tenetur
                    excepturi aut pariatur est eos. Sit sit
                    necessitatibus veritatis sed molestiae
                    voluptates incidunt iure sapiente.
                </p>
                <div className="justify-end card-actions">
                    <button className="btn btn-secondary">
                        More info
                    </button>
                </div>
            </div>
        </div> */
}

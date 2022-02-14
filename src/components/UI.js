export const Button = ({ type, className, ...props }) => (
    <button type={type} className={`${className} btn btn-primary`} {...props} />
)

export const ClientImage = props => (
    <div className="grid flex-auto h-40 w-80 card bg-base-300 rounded-box place-items-center border-dashed border-2 border-current-500 m-2">
        <figure>
            <img className="object-contain h-10 w-10 " src={props.src} />
        </figure>
    </div>
)

export const Image = props => (
    <figure>
        <img src={props.src} />
    </figure>
)
export const Rating = () => (
  <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" /> 
  <input type="radio" name="rating-2"  className="mask mask-star-2 bg-warning" /> 
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" /> 
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" /> 
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" />
</div>
)

export const Grid = ({children, col}) => (
  <div className={`grid gap-2 grid-cols-${col}`}>{children}</div>
)


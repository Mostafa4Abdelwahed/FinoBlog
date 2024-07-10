const Container = ({ children, className }) => {
    return (
      <div className={`${className}`}>
        <div className="max-w-screen-x px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    )
  }
  
  export default Container
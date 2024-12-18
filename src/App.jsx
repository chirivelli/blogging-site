const App = () => {

    return (
        <div className='container flex justify-around bg-red-600 p-3 mx-auto'>
            <input type="checkbox"/>
            <p>{Date.now()}</p>
            <p>+$100</p>
            <p className='bg-blue-400 px-3 py-1 rounded-xl'>tag</p>
            <p>Bank Logo</p>
            <p>isExcluded</p>
        </div>
    )
}

export default App

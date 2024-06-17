

export const SearchBar = () => {

    const { register, handleSubmit } = useForm ;
    const onSubmit = data => {
        console.log(data);
    }

  return <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Search...' type="search" {...register('query')} />
                <button > Serach</button>
            </form>
        </div>
}
export default SearchBar
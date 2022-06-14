

export default function DisplayCards(props) {
    const allVillagers = props.villagers.map(((v, i) => {
        return (
            <li key={`animal${i}`} style={{ listStyle: 'none' }}>
                <img src={v.image_uri} alt={v.name['name-USen']} onClick={() => props.handleClick(v)} />
                <p>{v.name['name-USen']}</p>
            </li>
        )
    }))
    return (
        <>
            <div>{allVillagers}</div>
        </>
    )
}

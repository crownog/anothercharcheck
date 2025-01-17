import { Tooltip } from 'antd'
import React from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'
import { WEAPONS } from '../../data/constant'

const Stylemark = styled.img`
    position: absolute;
    width: 30px;
    left: -6px;
    top: -6px;
    z-index: 3;
`

const CharacterTableView:React.FC<CharacterTableViewProps> = (data) => {

    const { formatMessage } = useIntl()

    const weapon = WEAPONS.find(a => a.id === data.category%10)

    return (
        <Tooltip title={`${formatMessage({id: data.code})}${data.style !== "4.5" ? " " + data.style.toUpperCase() : ""}
                       - ${formatMessage({id: data.sky})}, ${formatMessage({id: weapon?.weapon})}`}>
            <div style={{width:60, position: "relative", display: "inline-block", margin: 2}}>
                {data.style !== "4.5" ? <Stylemark src={`images/category/${data.style}.png`}/> : null}
                <img className={!data.have ? "gray" : ""} alt="select"
                    src={`images/character/${data.id}.png`} 
                style={{width:60, borderRadius:3 }}/>
            </div>
        </Tooltip>
    )
}

export default CharacterTableView

import { useEffect, useState } from "react";

import "../../App.css"
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Box,
    Button,
} from '@chakra-ui/react'

function productManage () {
    const [data, setdata] = useState(null)  

const getData = async () => {  
    const res = await fetch("http://localhost:3000/admin")
    const meubles = await res.json()
    setdata(meubles)
}

useEffect(()=>{
    const fetchMeubles = async () =>{
    await getData()
    }
    fetchMeubles()
}, [])

const handleDelete = (id) =>{
    //todo
} 

const handleToggle = (id) =>{
    //todo
}

    return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <TableContainer>
            <Table variant='striped' colorScheme="">
                
                <Thead>
                    <Tr>
                        <Th>Nom</Th>
                        <Th isNumeric>Prix</Th>
                        <Th>Statut</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
            
            <Tbody>
                    {data && data.length > 0 ? 
                    data.map((product) => (
                        <Tr key={product.id}>
                            <Td>{product.nom}</Td>
                            <Td isNumeric>{product.prix}</Td>
                            <Td>{product.statut}</Td>
                            <Td display={"flex"} gap={"1rem"}>
                                <Button className="adminBtn" onClick={() => handleToggle(product.id)}>Changer statut</Button>
                                <Button className="adminBtn" onClick={() => handleDelete(product.id)}>Supprimer article</Button>
                            </Td>
                        </Tr>
                    ))
                    : null
                    }
            </Tbody>            
            </Table>
        </TableContainer>
    </Box>
    )
}

export default productManage;
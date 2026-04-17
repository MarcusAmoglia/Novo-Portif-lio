import Button from './Button'
import { MdEmail } from 'react-icons/md'

const ContactButton = ({ texto = "Entre em Contato", variante = "solid", tamanho = "lg" }) => {
    const emailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=marcus.amoglia7@gmail.com&su=Oportunidade Profissional"
    
    return (
        <Button 
            cores="azul"
            variante={variante}
            tamanho={tamanho}
            href={emailUrl}
            icone={<MdEmail />}
            iconePosicao="direita"
        >
            {texto}
        </Button>
    )
}

export default ContactButton
import { CircularProgressbar } from "react-circular-progressbar";
export default function BarraProgresso(props){
    const {porcentagem} = props;
    return(
        <CircularProgressbar
        value={porcentagem}
        text={`Hoje`}
        background
        backgroundPadding={6}
        styles={{
            path: {
                stroke: "white",
                strokeLinecap: "round",
            },
            trail:{
                stroke: "#52B6FF",
            },
            text:{
                fill: '#fff',
                fontSize: '16px',
            },
            background:{
                fill: "#52B6FF",
            }
        }}
      />
    );
}
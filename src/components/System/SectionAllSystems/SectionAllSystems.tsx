import SystemBackup from "./System-Backup";
import SystemDistributor from "./System-Distributor";
import SystemGED from "./System-GED";
import SystemNotes from "./System-Notes";
import SystemProtest from "./System-Protest";
import SystemImmobile from "./System-Immobile";
import SystemTDPJ from "./System-tdpj";

export default function SectionAllSystems() {
    return(
        <>
            <div className="pb-[200px] bg-[#e6f3fc]">
                
                <SystemImmobile title={"Imóveis"} paragraph={`Desenvolvido para as serventias de Registro de Imóveis, com o objetivo de agilizar os processos, proporcionando rapidez
                    e dinamismo, desde a recepção até a entrega final do título, emissão de certidões, consultas a indicadores e muito mais.
                    Planejado para que sua usabilidade seja simples e os resultados sejam eficientes. Além de todo desempenho obtido, há total
                    interoperabilidade com as operações do SREI (Sistema de Registro Eletrônico de Imóveis).`}></SystemImmobile>
                <SystemTDPJ title={"TDPJ"} paragraph={`Desenvolvido para as serventias de Títulos e Documentos e Pessoa Jurídica, o Ocian TDPJ possui atribuições de registro para tornar qualquer documento incontestável, tais como contratos de trabalho, documentos escolares, contratos, atos constitutivos, atestados médicos, e outros. Ainda é possível gerar futuramente uma cópia autentica, via certidão, que passa a ter o mesmo valor do original, caso este seja extraviado, perdido ou danificado. Além de possuir controle total de notificações extrajudiciais, o que o torna prova de recebimento ou de dado conhecimento de qualquer documento levado a registro.`}></SystemTDPJ>
                <SystemNotes title={"Notas"} paragraph={`A especialidade de Notas foi desenvolvida com o objetivo de manter-se sempre atualizado em relação a legislação vigente e as suas normas de serviço. Por princípio, o sistema é capaz de se incorporar a novas funcionalidades, baseadas no conhecimento e experiência de nossos parceiros. Assim, de acordo com as suas necessidades, o sistema é atualizado para garantir sempre o bom uso da tecnologia, a facilidade de operação, segurança e melhoria dos procedimentos.`}></SystemNotes>
                <SystemProtest title={"Protesto"} paragraph={`Criteriosamente analisado e enquadrado nas mais diversas exigências normativas, o sistema Ocian Protesto foi desenvolvido para otimizar e assegurar cada processo do Tabelionato. Acompanhando a crescente alteração normativa, voltada para tecnologia, o sistema conta com uma comunicação total à CRA, CENPROT, Entidades Privadas (Serasa, Boa Vista), entre outros.`}></SystemProtest>
                <SystemBackup title={"Backup"} paragraph={`Tão importante quanto às facilidades geradas pelos sistemas Ocian, a proteção e o processo de backup dos dados são essenciais para garantir o funcionamento seguro dos cartórios, caso aconteça algum tipo de problema durante a rotina. Planejado para atender essas realidades, o Ocian backup é totalmente gerenciado, prático e seguro, além de seguir todas as recomendações do CNJ e da CGJ.`}></SystemBackup>
                <SystemGED title={"GED"} paragraph={`Desenvolvido para converter os documentos das serventias para o formato digital, a Ocian GED conta com as funcionalidades de digitalização, indexação, consultas, impressões de imagens e impressões de certidões reprográficas. Planejado para ser intuitivo e ágil, o Ocian GED proporciona alto ganho de desempenho nas rotinas, em que as imagens do documento são utilizadas. A especialidade é integrada aos demais sistemas Ocian.`}></SystemGED>
                <SystemDistributor title={"Distribuidor"} paragraph={`Com interface simples e intuitiva, o Ocian Distribuidor tem compatibilidade com diversos sistemas do mercado. Planejado para oferecer facilidade e agilidade na distribuição, esta especialidade conta com telas simples para leitura e preenchimento. A distribuição é feita de forma igualitária, segundo normativa, tanto quantitativa quanto qualitativa.`}></SystemDistributor>
               
            </div>
        </>
    );
}
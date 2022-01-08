import './Main.css';
import Chart from '../charts/Chart';

const Main = () =>{

    return (
        <main>
            <div className="main__container">
                <div className='main__title'>
                    <div className="main__greeting">
                        <h1>
                        France | Filtre por Data:
                        </h1>
                    </div>
                </div>
            
                <div className="main__cards">

                    <div className='card'>
                        <i className='fas fa-user-alt fa-2x text-lightblue'></i>
                        <div className='card_inner'>
                            <p className='text-primary-p'>Habitantes</p>
                            <span className='font-bold text-title'>62.636.580</span>
                        </div>
                    </div>

                    <div className='card'>
                        <i className='fas fa-user-plus fa-2x text-red'></i>
                        <div className='card_inner'>
                            <p className='text-primary-p'>Agendados</p>
                            <span className='font-bold text-title'>3.089.301</span>
                        </div>
                    </div>

                    <div className='card'>
                        <i className='fas fa-user-shield fa-2x text-lightblue'></i>
                        <div className='card_inner'>
                            <p className='text-primary-p'>Vacinados</p>
                            <span className='font-bold text-title'>2.035.000</span>
                        </div>
                    </div>

                    <div className='card'>
                        <i className='fas fa-user-times fa-2x text-red'></i>
                        <div className='card_inner'>
                            <p className='text-primary-p'>Não Vacinados</p>
                            <span className='font-bold text-title'>60.601.580</span>
                        </div>
                    </div>
                
                </div>


                <div className='charts'>

                    <div className='charts__left'>
                        <div className='charts__left__title'>
                            <div>
                                <h1>1˚ Dose X 2˚ Dose</h1>
                                <p className='charts__left__text'>População Imunizada - 1.51%</p>
                            </div>
                        <i className='fas fa-chart-bar'></i>
                        </div>
                        <Chart />
                    </div>

                    <div className='charts__right'>
                        <div className='charts__right__title'>
                            <div>
                                <h1>Atendimentos</h1>
                                <p className='charts__right__text'>Agendados // Finalizados</p>
                            </div>
                        <i className='fas fa-chart-line'></i>
                        </div>
                        <Chart />
                    </div>


                </div>
            </div>
        </main>
    )

}

export default Main; 
import './App.css';
import LELA from './components/lela';

function MAR() {
    return (
        <div className="MAR">
            <section>
                <div className='container'>
                    <h1>SAMPLE REACT</h1>
                    <div className='box'>
                        <LELA brand='SPACE' className='text'/>
                    </div>
                    <div className='box'>
                        <LELA brand='SPACE' className='text'/>
                    </div>
                    <div className='box'>
                        <LELA brand='SPACE' className='text'/>
                    </div>
                    <div className='box'>
                        <h1>MISS KO NA SI LELA</h1>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MAR;

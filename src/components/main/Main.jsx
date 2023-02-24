import './main.css'
import LeagueLogo from '../../assets/league.png'
import TeamLogo1 from '../../assets/team1.png'
import TeamLogo2 from '../../assets/team2.png'

const Main = () => {
  return (
    <>
        <section className="section main">
          <button>
            Test API
          </button>
            <div className="container live-score flex">
                <div className="live-container">
                  <div className="match-container">
                    <div className="league flex">
                      <img src={LeagueLogo} alt="" className="league-logo" />
                      <h4 className="league-name">campeonato brasileiro</h4>
                    </div>
                    <div className="teams-container flex">
                      <div className="team-box">
                        <img src={TeamLogo1} alt="" className="team-logo" />
                        <h4 className="team-name">time da casa</h4>
                      </div>
                      <span className="result">1 x 1</span> 
                      <div className="team-box">
                        <img src={TeamLogo2} alt="" className="team-logo" />
                        <h4 className="team-name">time visitante</h4>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Main
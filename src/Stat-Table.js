import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from "react-tooltip";

import LP from './datasource/Liverpool FC.json';
import LC from './datasource/Leicester City.json';
import MC from './datasource/Manchester City.json';
import MU from './datasource/Manchester United.json';
import NC from './datasource/Norwich City.json';

import SU from './datasource/Sheffield United.json';
import SA from './datasource/Southampton FC.json';
import TH from './datasource/Tottenham Hotspur.json';
import WF from './datasource/Watford FC.json';
import WH from './datasource/West Ham United.json';

import WW from './datasource/Wolverhampton Wanderers.json';
import AB from './datasource/AFC Bournemouth.json';
import AF from './datasource/Arsenal FC.json';
import BH from './datasource/Brighton & Hove Albion.json';
import BF from './datasource/Burnley FC.json';

import CF from './datasource/Chelsea FC.json';
import EF from './datasource/Everton FC.json';
import NU from './datasource/Newcastle United.json';
import AV from './datasource/Aston Villa.json';
import CP from './datasource/Crystal Palace.json';

// Note to self, component naming is case sensitive

class StatTable extends Component {
    constructor(props){
        super(props);
        //console.log(props);
    }

    mouseEnter(elem) {

     }
  
  mouseLeave() {
      console.log('mouse leave');
    }
  
    // Do this on creation of component
    componentDidMount(){
      var node = ReactDOM.findDOMNode(this);
      var Liverpool_res=this.createTeamArray(LP);
      var ManCity_res=this.createTeamArray(MC);
      var Leicster_res=this.createTeamArray(LC);
      var Chelsea_res=this.createTeamArray(CF);
      var ManU_res=this.createTeamArray(MU);
      var Wolf_res=this.createTeamArray(WW);
      var Sheffield_res=this.createTeamArray(SU);
      var Spurs_res=this.createTeamArray(TH);
      var Arsenal_res=this.createTeamArray(AF);
      var Burnley_res=this.createTeamArray(BF);

      var Palace_res=this.createTeamArray(CP);
      var Everton_res=this.createTeamArray(EF);
      var Newcastle_res=this.createTeamArray(NU);
      var Southampton_res=this.createTeamArray(SA);
      var Brighton_res=this.createTeamArray(BH);
      var Westham_res=this.createTeamArray(WH);
      var Watford_res=this.createTeamArray(WF);
      var Bournemouth_res=this.createTeamArray(AB);
      var Villa_res=this.createTeamArray(AV);
      var Norwich_res=this.createTeamArray(NC);

      this.populateTable(Liverpool_res,1,node);
      this.populateTable(ManCity_res,2,node);
      this.populateTable(Leicster_res,3,node);
      this.populateTable(Chelsea_res,4,node);
      this.populateTable(ManU_res,5,node);
      this.populateTable(Wolf_res,6,node);
      this.populateTable(Sheffield_res,7,node);
      this.populateTable(Spurs_res,8,node);
      this.populateTable(Arsenal_res,9,node);
      this.populateTable(Burnley_res,10,node);

      this.populateTable(Palace_res,11,node);
      this.populateTable(Everton_res,12,node);
      this.populateTable(Newcastle_res,13,node);
      this.populateTable(Southampton_res,14,node);
      this.populateTable(Brighton_res,15,node);
      this.populateTable(Westham_res,16,node);
      this.populateTable(Watford_res,17,node);
      this.populateTable(Bournemouth_res,18,node);
      this.populateTable(Villa_res,19,node);
      this.populateTable(Norwich_res,20,node);
    }


    // Function that goes through each row and colors them according to the stats
    populateTable(team,row_num,node){
      // If liverpool, because of naming convention you don't change anything
      // [id='Rectangle 1_row'];
      var row="";
      if(row_num>1){
        row="_"+row_num;
      }

      if (node instanceof HTMLElement) {
        for(var i = 0;i<team.length;i++){
          var curr  = "[id='Rectangle "+(i+1)+row+"']";
          var child = node.querySelector(curr);
          var match_details = team[i].HomeTeam+"-"+team[i].AwayTeam+"<br/><br/><br/><br/>"+team[i].HomeScore+"-"+team[i].AwayScore;


          child.setAttribute("data-tip",match_details);
          ReactTooltip.rebuild();
          child.classList.add("hoverable");
          // Create a tool tip div and append it 

          
          if(child === null){
            console.log('nul');
          }
          if(team[i].Result === "Win"){
            child.setAttribute("fill","green");
          }

          if(team[i].Result === "Loss"){
            child.setAttribute("fill","red");
          }

          if(team[i].Result === "Draw"){
            child.setAttribute("fill","Yellow");
          }
        }
      }
    }

    // Helper function that creates an array of results for the json values
    createTeamArray(obj){
      var team = [];
      //var first_match = LP[Object.keys(LP)[0]];
      Object.keys(obj).map(key=>{
        team.push(obj[key]);
      });

      team.reverse();
      return team;
    }


  render() {

    return(
        <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="le-table">
            
              <svg width="1054" height="782" viewBox="0 0 1054 782" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Frame 1">
              <g id="Group 1">
              <path id="Rectangle 1" d="M102.728 48.5L107.343 36.5H131.272L126.657 48.5H102.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 39" d="M35.5196 48.5L35.9811 36.5H107.272L102.657 48.5H35.5196Z" fill="#2F2E2E" stroke="black"/>
              <path id="Rectangle 2" d="M126.728 48.5L131.343 36.5H155.272L150.657 48.5H126.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 3" d="M150.728 48.5L155.343 36.5H179.272L174.657 48.5H150.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 4" d="M174.728 48.5L179.343 36.5H203.272L198.657 48.5H174.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 5" d="M198.728 48.5L203.343 36.5H227.272L222.657 48.5H198.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 6" d="M222.728 48.5L227.343 36.5H251.272L246.657 48.5H222.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 7" d="M246.728 48.5L251.343 36.5H275.272L270.657 48.5H246.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 8" d="M270.728 48.5L275.343 36.5H299.272L294.657 48.5H270.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 9" d="M294.728 48.5L299.343 36.5H323.272L318.657 48.5H294.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 10" d="M318.728 48.5L323.343 36.5H347.272L342.657 48.5H318.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 11" d="M342.728 48.5L347.343 36.5H371.272L366.657 48.5H342.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 12" d="M366.728 48.5L371.343 36.5H395.272L390.657 48.5H366.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 13" d="M390.728 48.5L395.343 36.5H419.272L414.657 48.5H390.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 14" d="M414.728 48.5L419.343 36.5H443.272L438.657 48.5H414.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 15" d="M438.728 48.5L443.343 36.5H467.272L462.657 48.5H438.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 16" d="M462.728 48.5L467.343 36.5H491.272L486.657 48.5H462.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 17" d="M486.728 48.5L491.343 36.5H515.272L510.657 48.5H486.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 18" d="M510.728 48.5L515.343 36.5H539.272L534.657 48.5H510.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 21" d="M582.728 48.5L587.343 36.5H611.272L606.657 48.5H582.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 22" d="M606.728 48.5L611.343 36.5H635.272L630.657 48.5H606.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 23" d="M630.728 48.5L635.343 36.5H659.272L654.657 48.5H630.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 24" d="M654.728 48.5L659.343 36.5H683.272L678.657 48.5H654.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 25" d="M678.728 48.5L683.343 36.5H707.272L702.657 48.5H678.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 26" d="M702.728 48.5L707.343 36.5H731.272L726.657 48.5H702.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 27" d="M726.728 48.5L731.343 36.5H755.272L750.657 48.5H726.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 28" d="M750.728 48.5L755.343 36.5H779.272L774.657 48.5H750.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 29" d="M774.728 48.5L779.343 36.5H803.272L798.657 48.5H774.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 30" d="M798.728 48.5L803.343 36.5H827.272L822.657 48.5H798.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 31" d="M822.728 48.5L827.343 36.5H851.272L846.657 48.5H822.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 32" d="M846.728 48.5L851.343 36.5H875.272L870.657 48.5H846.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 33" d="M870.728 48.5L875.343 36.5H899.272L894.657 48.5H870.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 34" d="M894.728 48.5L899.343 36.5H923.272L918.657 48.5H894.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 35" d="M918.728 48.5L923.343 36.5H947.272L942.657 48.5H918.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 36" d="M942.728 48.5L947.343 36.5H971.272L966.657 48.5H942.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 37" d="M966.728 48.5L971.343 36.5H995.272L990.657 48.5H966.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 38" d="M990.728 48.5L995.343 36.5H1019.5V48.5H990.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 19" d="M534.728 48.5L539.343 36.5H563.272L558.657 48.5H534.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 20" d="M558.728 48.5L563.343 36.5H587.272L582.657 48.5H558.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Liverpool" d="M44.958 45.0137H48.1855V46H43.7227V38.8906H44.958V45.0137ZM50.8303 46H49.6438V40.7168H50.8303V46ZM49.5705 39.3447C49.5705 39.1624 49.6275 39.0111 49.7414 38.8906C49.8586 38.7702 50.0246 38.71 50.2395 38.71C50.4543 38.71 50.6203 38.7702 50.7375 38.8906C50.8547 39.0111 50.9133 39.1624 50.9133 39.3447C50.9133 39.5238 50.8547 39.6735 50.7375 39.7939C50.6203 39.9111 50.4543 39.9697 50.2395 39.9697C50.0246 39.9697 49.8586 39.9111 49.7414 39.7939C49.6275 39.6735 49.5705 39.5238 49.5705 39.3447ZM54.5395 44.4961L55.6576 40.7168H56.8832L55.0521 46H54.0219L52.1762 40.7168H53.4066L54.5395 44.4961ZM60.4361 46.0977C59.6842 46.0977 59.0738 45.8617 58.6051 45.3896C58.1396 44.9144 57.9068 44.2829 57.9068 43.4951V43.3486C57.9068 42.8213 58.0077 42.3509 58.2096 41.9375C58.4146 41.5208 58.7011 41.1969 59.0689 40.9658C59.4368 40.7347 59.8469 40.6191 60.2994 40.6191C61.0188 40.6191 61.5738 40.8486 61.9645 41.3076C62.3583 41.7666 62.5553 42.416 62.5553 43.2559V43.7344H59.1031C59.1389 44.1706 59.2838 44.5156 59.5377 44.7695C59.7949 45.0234 60.1171 45.1504 60.5045 45.1504C61.0481 45.1504 61.4908 44.9307 61.8326 44.4912L62.4723 45.1016C62.2607 45.4173 61.9775 45.6631 61.6227 45.8389C61.2711 46.0114 60.8756 46.0977 60.4361 46.0977ZM60.2945 41.5713C59.969 41.5713 59.7053 41.6852 59.5035 41.9131C59.3049 42.141 59.178 42.4583 59.1227 42.8652H61.3834V42.7773C61.3574 42.3802 61.2516 42.0807 61.066 41.8789C60.8805 41.6738 60.6233 41.5713 60.2945 41.5713ZM66.7967 41.8008C66.6404 41.7747 66.4793 41.7617 66.3133 41.7617C65.7697 41.7617 65.4035 41.9701 65.2146 42.3867V46H64.0281V40.7168H65.1609L65.1902 41.3076C65.4767 40.8486 65.8738 40.6191 66.3816 40.6191C66.5509 40.6191 66.6909 40.6419 66.8016 40.6875L66.7967 41.8008ZM72.7227 43.4121C72.7227 44.2292 72.5371 44.8818 72.166 45.3701C71.7949 45.8551 71.2969 46.0977 70.6719 46.0977C70.0924 46.0977 69.6286 45.9072 69.2803 45.5264V48.0312H68.0938V40.7168H69.1875L69.2363 41.2539C69.5846 40.8307 70.0583 40.6191 70.6572 40.6191C71.3018 40.6191 71.8063 40.86 72.1709 41.3418C72.5387 41.8203 72.7227 42.486 72.7227 43.3389V43.4121ZM71.541 43.3096C71.541 42.7822 71.4352 42.3639 71.2236 42.0547C71.0153 41.7454 70.7158 41.5908 70.3252 41.5908C69.8402 41.5908 69.4919 41.791 69.2803 42.1914V44.5352C69.4951 44.9453 69.8467 45.1504 70.335 45.1504C70.7126 45.1504 71.0072 44.999 71.2188 44.6963C71.4336 44.3903 71.541 43.9281 71.541 43.3096ZM74.0588 43.3096C74.0588 42.792 74.1613 42.3265 74.3664 41.9131C74.5715 41.4964 74.8596 41.1774 75.2307 40.9561C75.6018 40.7314 76.0282 40.6191 76.51 40.6191C77.2229 40.6191 77.8007 40.8486 78.2434 41.3076C78.6893 41.7666 78.9302 42.3753 78.966 43.1338L78.9709 43.4121C78.9709 43.9329 78.87 44.3984 78.6682 44.8086C78.4696 45.2188 78.1831 45.5361 77.8088 45.7607C77.4377 45.9854 77.008 46.0977 76.5197 46.0977C75.7743 46.0977 75.177 45.8503 74.7277 45.3555C74.2818 44.8574 74.0588 44.195 74.0588 43.3682V43.3096ZM75.2453 43.4121C75.2453 43.9557 75.3576 44.3822 75.5822 44.6914C75.8068 44.9974 76.1193 45.1504 76.5197 45.1504C76.9201 45.1504 77.231 44.9941 77.4523 44.6816C77.677 44.3691 77.7893 43.9118 77.7893 43.3096C77.7893 42.7757 77.6737 42.3525 77.4426 42.04C77.2147 41.7275 76.9038 41.5713 76.51 41.5713C76.1226 41.5713 75.815 41.7259 75.5871 42.0352C75.3592 42.3411 75.2453 42.8001 75.2453 43.4121ZM80.3021 43.3096C80.3021 42.792 80.4047 42.3265 80.6098 41.9131C80.8148 41.4964 81.1029 41.1774 81.474 40.9561C81.8451 40.7314 82.2715 40.6191 82.7533 40.6191C83.4662 40.6191 84.044 40.8486 84.4867 41.3076C84.9327 41.7666 85.1736 42.3753 85.2094 43.1338L85.2143 43.4121C85.2143 43.9329 85.1133 44.3984 84.9115 44.8086C84.713 45.2188 84.4265 45.5361 84.0521 45.7607C83.6811 45.9854 83.2514 46.0977 82.7631 46.0977C82.0176 46.0977 81.4203 45.8503 80.9711 45.3555C80.5251 44.8574 80.3021 44.195 80.3021 43.3682V43.3096ZM81.4887 43.4121C81.4887 43.9557 81.601 44.3822 81.8256 44.6914C82.0502 44.9974 82.3627 45.1504 82.7631 45.1504C83.1635 45.1504 83.4743 44.9941 83.6957 44.6816C83.9203 44.3691 84.0326 43.9118 84.0326 43.3096C84.0326 42.7757 83.9171 42.3525 83.6859 42.04C83.4581 41.7275 83.1472 41.5713 82.7533 41.5713C82.3659 41.5713 82.0583 41.7259 81.8305 42.0352C81.6026 42.3411 81.4887 42.8001 81.4887 43.4121ZM88.0299 46H86.8434V38.5H88.0299V46Z" fill="white"/>
              </g>
              <g id="Group 2">
              <path id="Rectangle 1_2" d="M102.728 66.5L107.343 54.5H131.272L126.657 66.5H102.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 39_2" d="M35.5196 66.5L35.9811 54.5H107.272L102.657 66.5H35.5196Z" fill="#2F2E2E" stroke="black"/>
              <path id="Rectangle 2_2" d="M126.728 66.5L131.343 54.5H155.272L150.657 66.5H126.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 3_2" d="M150.728 66.5L155.343 54.5H179.272L174.657 66.5H150.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 4_2" d="M174.728 66.5L179.343 54.5H203.272L198.657 66.5H174.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 5_2" d="M198.728 66.5L203.343 54.5H227.272L222.657 66.5H198.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 6_2" d="M222.728 66.5L227.343 54.5H251.272L246.657 66.5H222.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 7_2" d="M246.728 66.5L251.343 54.5H275.272L270.657 66.5H246.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 8_2" d="M270.728 66.5L275.343 54.5H299.272L294.657 66.5H270.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 9_2" d="M294.728 66.5L299.343 54.5H323.272L318.657 66.5H294.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 10_2" d="M318.728 66.5L323.343 54.5H347.272L342.657 66.5H318.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 11_2" d="M342.728 66.5L347.343 54.5H371.272L366.657 66.5H342.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 12_2" d="M366.728 66.5L371.343 54.5H395.272L390.657 66.5H366.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 13_2" d="M390.728 66.5L395.343 54.5H419.272L414.657 66.5H390.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 14_2" d="M414.728 66.5L419.343 54.5H443.272L438.657 66.5H414.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 15_2" d="M438.728 66.5L443.343 54.5H467.272L462.657 66.5H438.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 16_2" d="M462.728 66.5L467.343 54.5H491.272L486.657 66.5H462.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 17_2" d="M486.728 66.5L491.343 54.5H515.272L510.657 66.5H486.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 18_2" d="M510.728 66.5L515.343 54.5H539.272L534.657 66.5H510.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 21_2" d="M582.728 66.5L587.343 54.5H611.272L606.657 66.5H582.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 22_2" d="M606.728 66.5L611.343 54.5H635.272L630.657 66.5H606.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 23_2" d="M630.728 66.5L635.343 54.5H659.272L654.657 66.5H630.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 24_2" d="M654.728 66.5L659.343 54.5H683.272L678.657 66.5H654.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 25_2" d="M678.728 66.5L683.343 54.5H707.272L702.657 66.5H678.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 26_2" d="M702.728 66.5L707.343 54.5H731.272L726.657 66.5H702.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 27_2" d="M726.728 66.5L731.343 54.5H755.272L750.657 66.5H726.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 28_2" d="M750.728 66.5L755.343 54.5H779.272L774.657 66.5H750.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 29_2" d="M774.728 66.5L779.343 54.5H803.272L798.657 66.5H774.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 30_2" d="M798.728 66.5L803.343 54.5H827.272L822.657 66.5H798.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 31_2" d="M822.728 66.5L827.343 54.5H851.272L846.657 66.5H822.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 32_2" d="M846.728 66.5L851.343 54.5H875.272L870.657 66.5H846.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 33_2" d="M870.728 66.5L875.343 54.5H899.272L894.657 66.5H870.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 34_2" d="M894.728 66.5L899.343 54.5H923.272L918.657 66.5H894.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 35_2" d="M918.728 66.5L923.343 54.5H947.272L942.657 66.5H918.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 36_2" d="M942.728 66.5L947.343 54.5H971.272L966.657 66.5H942.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 37_2" d="M966.728 66.5L971.343 54.5H995.272L990.657 66.5H966.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 38_2" d="M990.728 66.5L995.343 54.5H1019.5V66.5H990.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 19_2" d="M534.728 66.5L539.343 54.5H563.272L558.657 66.5H534.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 20_2" d="M558.728 66.5L563.343 54.5H587.272L582.657 66.5H558.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Mancity" d="M45.3242 56.8906L47.375 62.3398L49.4209 56.8906H51.0176V64H49.7871V61.6562L49.9092 58.5215L47.8096 64H46.9258L44.8311 58.5264L44.9531 61.6562V64H43.7227V56.8906H45.3242ZM56.0744 64C56.0223 63.8991 55.9768 63.7347 55.9377 63.5068C55.5601 63.9007 55.0979 64.0977 54.551 64.0977C54.0204 64.0977 53.5874 63.9463 53.2521 63.6436C52.9169 63.3408 52.7492 62.9665 52.7492 62.5205C52.7492 61.9574 52.9576 61.526 53.3742 61.2266C53.7941 60.9238 54.3931 60.7725 55.1711 60.7725H55.8986V60.4258C55.8986 60.1523 55.8221 59.9342 55.6691 59.7715C55.5161 59.6055 55.2834 59.5225 54.9709 59.5225C54.7007 59.5225 54.4794 59.5908 54.3068 59.7275C54.1343 59.861 54.048 60.0319 54.048 60.2402H52.8615C52.8615 59.9505 52.9576 59.6803 53.1496 59.4297C53.3417 59.1758 53.6021 58.9772 53.9309 58.834C54.2629 58.6908 54.6324 58.6191 55.0393 58.6191C55.6577 58.6191 56.1509 58.7754 56.5188 59.0879C56.8866 59.3971 57.0754 59.8333 57.0852 60.3965V62.7793C57.0852 63.2546 57.1519 63.6338 57.2854 63.917V64H56.0744ZM54.7707 63.1455C55.0051 63.1455 55.2248 63.0885 55.4299 62.9746C55.6382 62.8607 55.7945 62.7077 55.8986 62.5156V61.5195H55.259C54.8195 61.5195 54.4891 61.596 54.2678 61.749C54.0464 61.902 53.9357 62.1185 53.9357 62.3984C53.9357 62.6263 54.0106 62.8086 54.1604 62.9453C54.3133 63.0788 54.5168 63.1455 54.7707 63.1455ZM59.9789 58.7168L60.0131 59.3271C60.4037 58.8551 60.9164 58.6191 61.5512 58.6191C62.6514 58.6191 63.2113 59.249 63.2309 60.5088V64H62.0443V60.5771C62.0443 60.2419 61.9711 59.9945 61.8246 59.835C61.6814 59.6722 61.4454 59.5908 61.1166 59.5908C60.6381 59.5908 60.2816 59.8073 60.0473 60.2402V64H58.8607V58.7168H59.9789ZM70.5338 61.6855C70.4622 62.444 70.1822 63.0365 69.6939 63.4629C69.2057 63.8861 68.5562 64.0977 67.7457 64.0977C67.1793 64.0977 66.6796 63.9642 66.2467 63.6973C65.817 63.4271 65.485 63.0446 65.2506 62.5498C65.0162 62.055 64.8941 61.4805 64.8844 60.8262V60.1621C64.8844 59.4915 65.0032 58.9007 65.2408 58.3896C65.4785 57.8786 65.8186 57.4847 66.2613 57.208C66.7073 56.9313 67.2216 56.793 67.8043 56.793C68.5888 56.793 69.2203 57.0062 69.6988 57.4326C70.1773 57.859 70.4557 58.4613 70.5338 59.2393H69.3033C69.2447 58.7282 69.095 58.3604 68.8541 58.1357C68.6165 57.9079 68.2665 57.7939 67.8043 57.7939C67.2672 57.7939 66.8538 57.9909 66.5641 58.3848C66.2776 58.7754 66.1311 59.3499 66.1246 60.1084V60.7383C66.1246 61.5065 66.2613 62.0924 66.5348 62.4961C66.8115 62.8997 67.2151 63.1016 67.7457 63.1016C68.2307 63.1016 68.5953 62.9925 68.8395 62.7744C69.0836 62.5563 69.2382 62.1934 69.3033 61.6855H70.5338ZM73.3396 64H72.1531V58.7168H73.3396V64ZM72.0799 57.3447C72.0799 57.1624 72.1368 57.0111 72.2508 56.8906C72.368 56.7702 72.534 56.71 72.7488 56.71C72.9637 56.71 73.1297 56.7702 73.2469 56.8906C73.3641 57.0111 73.4227 57.1624 73.4227 57.3447C73.4227 57.5238 73.3641 57.6735 73.2469 57.7939C73.1297 57.9111 72.9637 57.9697 72.7488 57.9697C72.534 57.9697 72.368 57.9111 72.2508 57.7939C72.1368 57.6735 72.0799 57.5238 72.0799 57.3447ZM76.6729 57.4326V58.7168H77.6055V59.5957H76.6729V62.5449C76.6729 62.7467 76.7119 62.8932 76.79 62.9844C76.8714 63.0723 77.0146 63.1162 77.2197 63.1162C77.3564 63.1162 77.4948 63.0999 77.6348 63.0674V63.9854C77.3646 64.0602 77.1042 64.0977 76.8535 64.0977C75.9421 64.0977 75.4863 63.5947 75.4863 62.5889V59.5957H74.6172V58.7168H75.4863V57.4326H76.6729ZM80.9143 62.3008L81.9885 58.7168H83.2531L81.1535 64.8008C80.8312 65.6895 80.2844 66.1338 79.5129 66.1338C79.3404 66.1338 79.1499 66.1045 78.9416 66.0459V65.1279L79.1662 65.1426C79.4657 65.1426 79.6903 65.0872 79.84 64.9766C79.993 64.8691 80.1135 64.6868 80.2014 64.4297L80.3723 63.9756L78.5168 58.7168H79.7961L80.9143 62.3008Z" fill="white"/>
              </g>
              <g id="Group 3">
              <path id="Rectangle 1_3" d="M102.728 84.5L107.343 72.5H131.272L126.657 84.5H102.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 39_3" d="M35.5196 84.5L35.9811 72.5H107.272L102.657 84.5H35.5196Z" fill="#2F2E2E" stroke="black"/>
              <path id="Rectangle 2_3" d="M126.728 84.5L131.343 72.5H155.272L150.657 84.5H126.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 3_3" d="M150.728 84.5L155.343 72.5H179.272L174.657 84.5H150.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 4_3" d="M174.728 84.5L179.343 72.5H203.272L198.657 84.5H174.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 5_3" d="M198.728 84.5L203.343 72.5H227.272L222.657 84.5H198.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 6_3" d="M222.728 84.5L227.343 72.5H251.272L246.657 84.5H222.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 7_3" d="M246.728 84.5L251.343 72.5H275.272L270.657 84.5H246.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 8_3" d="M270.728 84.5L275.343 72.5H299.272L294.657 84.5H270.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 9_3" d="M294.728 84.5L299.343 72.5H323.272L318.657 84.5H294.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 10_3" d="M318.728 84.5L323.343 72.5H347.272L342.657 84.5H318.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 11_3" d="M342.728 84.5L347.343 72.5H371.272L366.657 84.5H342.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 12_3" d="M366.728 84.5L371.343 72.5H395.272L390.657 84.5H366.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 13_3" d="M390.728 84.5L395.343 72.5H419.272L414.657 84.5H390.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 14_3" d="M414.728 84.5L419.343 72.5H443.272L438.657 84.5H414.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 15_3" d="M438.728 84.5L443.343 72.5H467.272L462.657 84.5H438.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 16_3" d="M462.728 84.5L467.343 72.5H491.272L486.657 84.5H462.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 17_3" d="M486.728 84.5L491.343 72.5H515.272L510.657 84.5H486.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 18_3" d="M510.728 84.5L515.343 72.5H539.272L534.657 84.5H510.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 21_3" d="M582.728 84.5L587.343 72.5H611.272L606.657 84.5H582.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 22_3" d="M606.728 84.5L611.343 72.5H635.272L630.657 84.5H606.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 23_3" d="M630.728 84.5L635.343 72.5H659.272L654.657 84.5H630.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 24_3" d="M654.728 84.5L659.343 72.5H683.272L678.657 84.5H654.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 25_3" d="M678.728 84.5L683.343 72.5H707.272L702.657 84.5H678.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 26_3" d="M702.728 84.5L707.343 72.5H731.272L726.657 84.5H702.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 27_3" d="M726.728 84.5L731.343 72.5H755.272L750.657 84.5H726.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 28_3" d="M750.728 84.5L755.343 72.5H779.272L774.657 84.5H750.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 29_3" d="M774.728 84.5L779.343 72.5H803.272L798.657 84.5H774.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 30_3" d="M798.728 84.5L803.343 72.5H827.272L822.657 84.5H798.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 31_3" d="M822.728 84.5L827.343 72.5H851.272L846.657 84.5H822.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 32_3" d="M846.728 84.5L851.343 72.5H875.272L870.657 84.5H846.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 33_3" d="M870.728 84.5L875.343 72.5H899.272L894.657 84.5H870.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 34_3" d="M894.728 84.5L899.343 72.5H923.272L918.657 84.5H894.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 35_3" d="M918.728 84.5L923.343 72.5H947.272L942.657 84.5H918.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 36_3" d="M942.728 84.5L947.343 72.5H971.272L966.657 84.5H942.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 37_3" d="M966.728 84.5L971.343 72.5H995.272L990.657 84.5H966.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 38_3" d="M990.728 84.5L995.343 72.5H1019.5V84.5H990.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 19_3" d="M534.728 84.5L539.343 72.5H563.272L558.657 84.5H534.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 20_3" d="M558.728 84.5L563.343 72.5H587.272L582.657 84.5H558.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Leicester" d="M45.1538 80.915H48.7041V82H43.7949V74.1797H45.1538V80.915ZM52.7842 82.1074C51.9571 82.1074 51.2857 81.8478 50.77 81.3286C50.258 80.8058 50.002 80.1112 50.002 79.2446V79.0835C50.002 78.5034 50.113 77.986 50.335 77.5312C50.5606 77.0729 50.8757 76.7166 51.2803 76.4624C51.6849 76.2082 52.1361 76.0811 52.6338 76.0811C53.4251 76.0811 54.0357 76.3335 54.4654 76.8384C54.8986 77.3433 55.1153 78.0576 55.1153 78.9814V79.5078H51.3179C51.3573 79.9876 51.5166 80.3672 51.7959 80.6465C52.0788 80.9258 52.4333 81.0654 52.8594 81.0654C53.4574 81.0654 53.9444 80.8237 54.3203 80.3403L55.0239 81.0117C54.7912 81.359 54.4797 81.6294 54.0894 81.8228C53.7027 82.0125 53.2676 82.1074 52.7842 82.1074ZM52.6284 77.1284C52.2704 77.1284 51.9803 77.2537 51.7583 77.5044C51.5399 77.755 51.4002 78.1042 51.3394 78.5518H53.8262V78.4551C53.7975 78.0182 53.6812 77.6888 53.4771 77.4668C53.273 77.2412 52.9901 77.1284 52.6284 77.1284ZM58.1265 82H56.8213V76.1885H58.1265V82ZM56.7408 74.6792C56.7408 74.4787 56.8034 74.3122 56.9288 74.1797C57.0577 74.0472 57.2403 73.981 57.4766 73.981C57.7129 73.981 57.8955 74.0472 58.0245 74.1797C58.1534 74.3122 58.2178 74.4787 58.2178 74.6792C58.2178 74.8761 58.1534 75.0409 58.0245 75.1733C57.8955 75.3022 57.7129 75.3667 57.4766 75.3667C57.2403 75.3667 57.0577 75.3022 56.9288 75.1733C56.8034 75.0409 56.7408 74.8761 56.7408 74.6792ZM62.545 81.0654C62.8708 81.0654 63.1412 80.9705 63.356 80.7808C63.5709 80.591 63.6854 80.3564 63.6998 80.0771H64.9297C64.9154 80.4388 64.8026 80.7772 64.5914 81.0923C64.3801 81.4038 64.0936 81.6509 63.732 81.8335C63.3703 82.0161 62.98 82.1074 62.5611 82.1074C61.7483 82.1074 61.1037 81.8442 60.6275 81.3179C60.1513 80.7915 59.9131 80.0646 59.9131 79.1372V79.0029C59.9131 78.1185 60.1495 77.4113 60.6221 76.8813C61.0948 76.3478 61.7393 76.0811 62.5557 76.0811C63.2468 76.0811 63.809 76.2834 64.2422 76.688C64.6791 77.089 64.9083 77.6172 64.9297 78.2725H63.6998C63.6854 77.9395 63.5709 77.6655 63.356 77.4507C63.1448 77.2358 62.8744 77.1284 62.545 77.1284C62.1225 77.1284 61.7966 77.2824 61.5674 77.5903C61.3383 77.8947 61.2219 78.3584 61.2183 78.9814V79.1909C61.2183 79.8211 61.3311 80.292 61.5567 80.6035C61.7859 80.9115 62.1153 81.0654 62.545 81.0654ZM69.0797 82.1074C68.2525 82.1074 67.5811 81.8478 67.0655 81.3286C66.5535 80.8058 66.2974 80.1112 66.2974 79.2446V79.0835C66.2974 78.5034 66.4084 77.986 66.6304 77.5312C66.856 77.0729 67.1711 76.7166 67.5758 76.4624C67.9804 76.2082 68.4316 76.0811 68.9293 76.0811C69.7206 76.0811 70.3311 76.3335 70.7608 76.8384C71.1941 77.3433 71.4107 78.0576 71.4107 78.9814V79.5078H67.6134C67.6527 79.9876 67.8121 80.3672 68.0914 80.6465C68.3743 80.9258 68.7288 81.0654 69.1549 81.0654C69.7528 81.0654 70.2398 80.8237 70.6158 80.3403L71.3194 81.0117C71.0867 81.359 70.7751 81.6294 70.3848 81.8228C69.9981 82.0125 69.5631 82.1074 69.0797 82.1074ZM68.9239 77.1284C68.5658 77.1284 68.2758 77.2537 68.0538 77.5044C67.8354 77.755 67.6957 78.1042 67.6348 78.5518H70.1217V78.4551C70.093 78.0182 69.9766 77.6888 69.7725 77.4668C69.5684 77.2412 69.2856 77.1284 68.9239 77.1284ZM76.2911 80.4209C76.2911 80.1882 76.1944 80.0109 76.0011 79.8892C75.8113 79.7674 75.4944 79.66 75.0504 79.5669C74.6064 79.4738 74.2358 79.3556 73.9386 79.2124C73.2869 78.8973 72.961 78.4408 72.961 77.8428C72.961 77.3415 73.1723 76.9225 73.5948 76.5859C74.0173 76.2493 74.5545 76.0811 75.2062 76.0811C75.9008 76.0811 76.4612 76.2529 76.8873 76.5967C77.317 76.9404 77.5318 77.3862 77.5318 77.9341H76.2267C76.2267 77.6834 76.1336 77.4757 75.9474 77.311C75.7612 77.1427 75.5141 77.0586 75.2062 77.0586C74.9197 77.0586 74.6852 77.1248 74.5025 77.2573C74.3235 77.3898 74.234 77.5671 74.234 77.7891C74.234 77.9896 74.3181 78.1453 74.4864 78.2563C74.6547 78.3674 74.9949 78.4801 75.5069 78.5947C76.019 78.7057 76.42 78.84 76.7101 78.9976C77.0037 79.1515 77.2203 79.3377 77.36 79.5562C77.5032 79.7746 77.5748 80.0396 77.5748 80.3511C77.5748 80.8739 77.3582 81.2982 76.9249 81.624C76.4916 81.9463 75.9241 82.1074 75.2223 82.1074C74.746 82.1074 74.3217 82.0215 73.9493 81.8496C73.5769 81.6777 73.2869 81.4414 73.0792 81.1406C72.8715 80.8398 72.7677 80.5158 72.7677 80.1685H74.0353C74.0532 80.4764 74.1695 80.7145 74.3844 80.8828C74.5992 81.0475 74.8839 81.1299 75.2384 81.1299C75.5821 81.1299 75.8435 81.0654 76.0226 80.9365C76.2016 80.804 76.2911 80.6322 76.2911 80.4209ZM80.9567 74.7759V76.1885H81.9825V77.1553H80.9567V80.3994C80.9567 80.6214 80.9996 80.7826 81.0856 80.8828C81.1751 80.9795 81.3326 81.0278 81.5582 81.0278C81.7086 81.0278 81.8608 81.0099 82.0148 80.9741V81.9839C81.7176 82.0662 81.4311 82.1074 81.1554 82.1074C80.1528 82.1074 79.6515 81.5542 79.6515 80.4478V77.1553H78.6954V76.1885H79.6515V74.7759H80.9567ZM86.1486 82.1074C85.3214 82.1074 84.65 81.8478 84.1344 81.3286C83.6224 80.8058 83.3663 80.1112 83.3663 79.2446V79.0835C83.3663 78.5034 83.4774 77.986 83.6994 77.5312C83.9249 77.0729 84.24 76.7166 84.6447 76.4624C85.0493 76.2082 85.5005 76.0811 85.9982 76.0811C86.7895 76.0811 87.4 76.3335 87.8297 76.8384C88.263 77.3433 88.4796 78.0576 88.4796 78.9814V79.5078H84.6823C84.7217 79.9876 84.881 80.3672 85.1603 80.6465C85.4432 80.9258 85.7977 81.0654 86.2238 81.0654C86.8218 81.0654 87.3087 80.8237 87.6847 80.3403L88.3883 81.0117C88.1556 81.359 87.8441 81.6294 87.4538 81.8228C87.067 82.0125 86.632 82.1074 86.1486 82.1074ZM85.9928 77.1284C85.6347 77.1284 85.3447 77.2537 85.1227 77.5044C84.9043 77.755 84.7646 78.1042 84.7038 78.5518H87.1906V78.4551C87.1619 78.0182 87.0455 77.6888 86.8414 77.4668C86.6373 77.2412 86.3545 77.1284 85.9928 77.1284ZM93.1452 77.3809C92.9733 77.3522 92.7961 77.3379 92.6134 77.3379C92.0155 77.3379 91.6126 77.5671 91.4049 78.0254V82H90.0998V76.1885H91.3459L91.3781 76.8384C91.6932 76.3335 92.13 76.0811 92.6886 76.0811C92.8748 76.0811 93.0288 76.1061 93.1505 76.1562L93.1452 77.3809Z" fill="white"/>
              </g>
              <g id="Group 4">
              <path id="Rectangle 1_4" d="M101.728 102.5L106.343 90.5H130.272L125.657 102.5H101.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 39_4" d="M34.5196 102.5L34.9811 90.5H106.272L101.657 102.5H34.5196Z" fill="#2F2E2E" stroke="black"/>
              <path id="Rectangle 2_4" d="M125.728 102.5L130.343 90.5H154.272L149.657 102.5H125.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 3_4" d="M149.728 102.5L154.343 90.5H178.272L173.657 102.5H149.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 4_4" d="M173.728 102.5L178.343 90.5H202.272L197.657 102.5H173.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 5_4" d="M197.728 102.5L202.343 90.5H226.272L221.657 102.5H197.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 6_4" d="M221.728 102.5L226.343 90.5H250.272L245.657 102.5H221.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 7_4" d="M245.728 102.5L250.343 90.5H274.272L269.657 102.5H245.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 8_4" d="M269.728 102.5L274.343 90.5H298.272L293.657 102.5H269.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 9_4" d="M293.728 102.5L298.343 90.5H322.272L317.657 102.5H293.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 10_4" d="M317.728 102.5L322.343 90.5H346.272L341.657 102.5H317.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 11_4" d="M341.728 102.5L346.343 90.5H370.272L365.657 102.5H341.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 12_4" d="M365.728 102.5L370.343 90.5H394.272L389.657 102.5H365.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 13_4" d="M389.728 102.5L394.343 90.5H418.272L413.657 102.5H389.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 14_4" d="M413.728 102.5L418.343 90.5H442.272L437.657 102.5H413.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 15_4" d="M437.728 102.5L442.343 90.5H466.272L461.657 102.5H437.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 16_4" d="M461.728 102.5L466.343 90.5H490.272L485.657 102.5H461.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 17_4" d="M485.728 102.5L490.343 90.5H514.272L509.657 102.5H485.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 18_4" d="M509.728 102.5L514.343 90.5H538.272L533.657 102.5H509.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 21_4" d="M581.728 102.5L586.343 90.5H610.272L605.657 102.5H581.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 22_4" d="M605.728 102.5L610.343 90.5H634.272L629.657 102.5H605.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 23_4" d="M629.728 102.5L634.343 90.5H658.272L653.657 102.5H629.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 24_4" d="M653.728 102.5L658.343 90.5H682.272L677.657 102.5H653.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 25_4" d="M677.728 102.5L682.343 90.5H706.272L701.657 102.5H677.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 26_4" d="M701.728 102.5L706.343 90.5H730.272L725.657 102.5H701.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 27_4" d="M725.728 102.5L730.343 90.5H754.272L749.657 102.5H725.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 28_4" d="M749.728 102.5L754.343 90.5H778.272L773.657 102.5H749.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 29_4" d="M773.728 102.5L778.343 90.5H802.272L797.657 102.5H773.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 30_4" d="M797.728 102.5L802.343 90.5H826.272L821.657 102.5H797.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 31_4" d="M821.728 102.5L826.343 90.5H850.272L845.657 102.5H821.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 32_4" d="M845.728 102.5L850.343 90.5H874.272L869.657 102.5H845.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 33_4" d="M869.728 102.5L874.343 90.5H898.272L893.657 102.5H869.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 34_4" d="M893.728 102.5L898.343 90.5H922.272L917.657 102.5H893.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 35_4" d="M917.728 102.5L922.343 90.5H946.272L941.657 102.5H917.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 36_4" d="M941.728 102.5L946.343 90.5H970.272L965.657 102.5H941.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 37_4" d="M965.728 102.5L970.343 90.5H994.272L989.657 102.5H965.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 38_4" d="M989.728 102.5L994.343 90.5H1018.5V102.5H989.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 19_4" d="M533.728 102.5L538.343 90.5H562.272L557.657 102.5H533.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 20_4" d="M557.728 102.5L562.343 90.5H586.272L581.657 102.5H557.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Chelsea" d="M49.7622 97.4541C49.6834 98.2884 49.3755 98.9401 48.8384 99.4092C48.3013 99.8747 47.5869 100.107 46.6953 100.107C46.0723 100.107 45.5226 99.9606 45.0464 99.667C44.5737 99.3698 44.2085 98.9491 43.9507 98.4048C43.6929 97.8605 43.5586 97.2285 43.5479 96.5088V95.7783C43.5479 95.0407 43.6785 94.3908 43.9399 93.8286C44.2013 93.2664 44.5755 92.8332 45.0625 92.5288C45.5531 92.2244 46.1188 92.0723 46.7598 92.0723C47.6227 92.0723 48.3174 92.3068 48.8438 92.7759C49.3701 93.245 49.6763 93.9074 49.7622 94.7632H48.4087C48.3442 94.201 48.1795 93.7964 47.9146 93.5493C47.6532 93.2987 47.2682 93.1733 46.7598 93.1733C46.1689 93.1733 45.7142 93.39 45.3955 93.8232C45.0804 94.2529 44.9193 94.8849 44.9121 95.7192V96.4121C44.9121 97.2572 45.0625 97.9017 45.3633 98.3457C45.6676 98.7897 46.1117 99.0117 46.6953 99.0117C47.2288 99.0117 47.6299 98.8918 47.8984 98.6519C48.167 98.4119 48.3371 98.0127 48.4087 97.4541H49.7622ZM52.7466 94.8223C53.1727 94.3281 53.7116 94.0811 54.3633 94.0811C55.6022 94.0811 56.2307 94.7882 56.2486 96.2026V100H54.9434V96.251C54.9434 95.8499 54.8557 95.5671 54.6802 95.4023C54.5083 95.234 54.2541 95.1499 53.9175 95.1499C53.3947 95.1499 53.0044 95.3826 52.7466 95.8481V100H51.4414V91.75H52.7466V94.8223ZM60.7369 100.107C59.9097 100.107 59.2383 99.8478 58.7227 99.3286C58.2107 98.8058 57.9546 98.1112 57.9546 97.2446V97.0835C57.9546 96.5034 58.0656 95.986 58.2876 95.5312C58.5132 95.0729 58.8283 94.7166 59.2329 94.4624C59.6376 94.2082 60.0887 94.0811 60.5865 94.0811C61.3778 94.0811 61.9883 94.3335 62.418 94.8384C62.8513 95.3433 63.0679 96.0576 63.0679 96.9814V97.5078H59.2705C59.3099 97.9876 59.4693 98.3672 59.7486 98.6465C60.0315 98.9258 60.3859 99.0654 60.8121 99.0654C61.41 99.0654 61.897 98.8237 62.273 98.3403L62.9766 99.0117C62.7439 99.359 62.4323 99.6294 62.042 99.8228C61.6553 100.013 61.2203 100.107 60.7369 100.107ZM60.5811 95.1284C60.223 95.1284 59.933 95.2537 59.711 95.5044C59.4926 95.755 59.3529 96.1042 59.292 96.5518H61.7788V96.4551C61.7502 96.0182 61.6338 95.6888 61.4297 95.4668C61.2256 95.2412 60.9427 95.1284 60.5811 95.1284ZM66.0792 100H64.774V91.75H66.0792V100ZM71.3678 98.4209C71.3678 98.1882 71.2711 98.0109 71.0777 97.8892C70.8879 97.7674 70.571 97.66 70.127 97.5669C69.683 97.4738 69.3124 97.3556 69.0152 97.2124C68.3635 96.8973 68.0377 96.4408 68.0377 95.8428C68.0377 95.3415 68.2489 94.9225 68.6715 94.5859C69.094 94.2493 69.6311 94.0811 70.2828 94.0811C70.9775 94.0811 71.5378 94.2529 71.9639 94.5967C72.3936 94.9404 72.6085 95.3862 72.6085 95.9341H71.3033C71.3033 95.6834 71.2102 95.4757 71.024 95.311C70.8378 95.1427 70.5907 95.0586 70.2828 95.0586C69.9963 95.0586 69.7618 95.1248 69.5792 95.2573C69.4001 95.3898 69.3106 95.5671 69.3106 95.7891C69.3106 95.9896 69.3948 96.1453 69.5631 96.2563C69.7314 96.3674 70.0715 96.4801 70.5836 96.5947C71.0956 96.7057 71.4967 96.84 71.7867 96.9976C72.0803 97.1515 72.297 97.3377 72.4366 97.5562C72.5798 97.7746 72.6514 98.0396 72.6514 98.3511C72.6514 98.8739 72.4348 99.2982 72.0015 99.624C71.5683 99.9463 71.0007 100.107 70.2989 100.107C69.8227 100.107 69.3984 100.021 69.026 99.8496C68.6536 99.6777 68.3635 99.4414 68.1558 99.1406C67.9482 98.8398 67.8443 98.5158 67.8443 98.1685H69.1119C69.1298 98.4764 69.2462 98.7145 69.461 98.8828C69.6759 99.0475 69.9605 99.1299 70.315 99.1299C70.6588 99.1299 70.9202 99.0654 71.0992 98.9365C71.2782 98.804 71.3678 98.6322 71.3678 98.4209ZM76.9571 100.107C76.13 100.107 75.4586 99.8478 74.943 99.3286C74.4309 98.8058 74.1749 98.1112 74.1749 97.2446V97.0835C74.1749 96.5034 74.2859 95.986 74.5079 95.5312C74.7335 95.0729 75.0486 94.7166 75.4532 94.4624C75.8578 94.2082 76.309 94.0811 76.8067 94.0811C77.5981 94.0811 78.2086 94.3335 78.6383 94.8384C79.0715 95.3433 79.2882 96.0576 79.2882 96.9814V97.5078H75.4908C75.5302 97.9876 75.6896 98.3672 75.9688 98.6465C76.2517 98.9258 76.6062 99.0654 77.0323 99.0654C77.6303 99.0654 78.1173 98.8237 78.4933 98.3403L79.1969 99.0117C78.9641 99.359 78.6526 99.6294 78.2623 99.8228C77.8756 100.013 77.4405 100.107 76.9571 100.107ZM76.8014 95.1284C76.4433 95.1284 76.1533 95.2537 75.9312 95.5044C75.7128 95.755 75.5732 96.1042 75.5123 96.5518H77.9991V96.4551C77.9705 96.0182 77.8541 95.6888 77.65 95.4668C77.4459 95.2412 77.163 95.1284 76.8014 95.1284ZM84.3834 100C84.3261 99.889 84.276 99.7082 84.233 99.4575C83.8177 99.8908 83.3092 100.107 82.7076 100.107C82.124 100.107 81.6477 99.9409 81.2789 99.6079C80.9101 99.2749 80.7257 98.8631 80.7257 98.3726C80.7257 97.7531 80.9549 97.2786 81.4132 96.9492C81.8751 96.6162 82.534 96.4497 83.3898 96.4497H84.1901V96.0684C84.1901 95.7676 84.1059 95.5277 83.9376 95.3486C83.7693 95.166 83.5133 95.0747 83.1696 95.0747C82.8724 95.0747 82.6289 95.1499 82.4391 95.3003C82.2493 95.4471 82.1544 95.6351 82.1544 95.8643H80.8492C80.8492 95.5456 80.9549 95.2484 81.1661 94.9727C81.3774 94.6934 81.6639 94.4749 82.0255 94.3174C82.3907 94.1598 82.7972 94.0811 83.2447 94.0811C83.9251 94.0811 84.4676 94.2529 84.8722 94.5967C85.2768 94.9368 85.4845 95.4167 85.4952 96.0361V98.6572C85.4952 99.18 85.5686 99.5972 85.7155 99.9087V100H84.3834ZM82.9493 99.0601C83.2071 99.0601 83.4488 98.9974 83.6744 98.8721C83.9036 98.7467 84.0755 98.5785 84.1901 98.3672V97.2715H83.4864C83.003 97.2715 82.6396 97.3556 82.3961 97.5239C82.1526 97.6922 82.0309 97.9303 82.0309 98.2383C82.0309 98.4889 82.1132 98.6895 82.278 98.8398C82.4462 98.9867 82.67 99.0601 82.9493 99.0601Z" fill="white"/>
              </g>
              <g id="Group 5">
              <path id="Rectangle 1_5" d="M102.728 120.5L107.343 108.5H131.272L126.657 120.5H102.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 39_5" d="M35.5196 120.5L35.9811 108.5H107.272L102.657 120.5H35.5196Z" fill="#2F2E2E" stroke="black"/>
              <path id="Rectangle 2_5" d="M126.728 120.5L131.343 108.5H155.272L150.657 120.5H126.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 3_5" d="M150.728 120.5L155.343 108.5H179.272L174.657 120.5H150.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 4_5" d="M174.728 120.5L179.343 108.5H203.272L198.657 120.5H174.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 5_5" d="M198.728 120.5L203.343 108.5H227.272L222.657 120.5H198.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 6_5" d="M222.728 120.5L227.343 108.5H251.272L246.657 120.5H222.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 7_5" d="M246.728 120.5L251.343 108.5H275.272L270.657 120.5H246.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 8_5" d="M270.728 120.5L275.343 108.5H299.272L294.657 120.5H270.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 9_5" d="M294.728 120.5L299.343 108.5H323.272L318.657 120.5H294.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 10_5" d="M318.728 120.5L323.343 108.5H347.272L342.657 120.5H318.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 11_5" d="M342.728 120.5L347.343 108.5H371.272L366.657 120.5H342.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 12_5" d="M366.728 120.5L371.343 108.5H395.272L390.657 120.5H366.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 13_5" d="M390.728 120.5L395.343 108.5H419.272L414.657 120.5H390.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 14_5" d="M414.728 120.5L419.343 108.5H443.272L438.657 120.5H414.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 15_5" d="M438.728 120.5L443.343 108.5H467.272L462.657 120.5H438.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 16_5" d="M462.728 120.5L467.343 108.5H491.272L486.657 120.5H462.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 17_5" d="M486.728 120.5L491.343 108.5H515.272L510.657 120.5H486.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 18_5" d="M510.728 120.5L515.343 108.5H539.272L534.657 120.5H510.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 21_5" d="M582.728 120.5L587.343 108.5H611.272L606.657 120.5H582.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 22_5" d="M606.728 120.5L611.343 108.5H635.272L630.657 120.5H606.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 23_5" d="M630.728 120.5L635.343 108.5H659.272L654.657 120.5H630.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 24_5" d="M654.728 120.5L659.343 108.5H683.272L678.657 120.5H654.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 25_5" d="M678.728 120.5L683.343 108.5H707.272L702.657 120.5H678.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 26_5" d="M702.728 120.5L707.343 108.5H731.272L726.657 120.5H702.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 27_5" d="M726.728 120.5L731.343 108.5H755.272L750.657 120.5H726.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 28_5" d="M750.728 120.5L755.343 108.5H779.272L774.657 120.5H750.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 29_5" d="M774.728 120.5L779.343 108.5H803.272L798.657 120.5H774.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 30_5" d="M798.728 120.5L803.343 108.5H827.272L822.657 120.5H798.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 31_5" d="M822.728 120.5L827.343 108.5H851.272L846.657 120.5H822.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 32_5" d="M846.728 120.5L851.343 108.5H875.272L870.657 120.5H846.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 33_5" d="M870.728 120.5L875.343 108.5H899.272L894.657 120.5H870.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 34_5" d="M894.728 120.5L899.343 108.5H923.272L918.657 120.5H894.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 35_5" d="M918.728 120.5L923.343 108.5H947.272L942.657 120.5H918.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 36_5" d="M942.728 120.5L947.343 108.5H971.272L966.657 120.5H942.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 37_5" d="M966.728 120.5L971.343 108.5H995.272L990.657 120.5H966.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 38_5" d="M990.728 120.5L995.343 108.5H1019.5V120.5H990.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 19_5" d="M534.728 120.5L539.343 108.5H563.272L558.657 120.5H534.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 20_5" d="M558.728 120.5L563.343 108.5H587.272L582.657 120.5H558.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="ManUnited" d="M45.5566 111.18L47.8125 117.174L50.063 111.18H51.8193V119H50.4658V116.422L50.6001 112.974L48.2905 119H47.3184L45.0142 112.979L45.1484 116.422V119H43.7949V111.18H45.5566ZM57.3819 119C57.3246 118.889 57.2744 118.708 57.2315 118.458C56.8161 118.891 56.3076 119.107 55.7061 119.107C55.1224 119.107 54.6462 118.941 54.2774 118.608C53.9085 118.275 53.7241 117.863 53.7241 117.373C53.7241 116.753 53.9533 116.279 54.4116 115.949C54.8736 115.616 55.5324 115.45 56.3882 115.45H57.1885V115.068C57.1885 114.768 57.1043 114.528 56.9361 114.349C56.7678 114.166 56.5117 114.075 56.168 114.075C55.8708 114.075 55.6273 114.15 55.4375 114.3C55.2477 114.447 55.1529 114.635 55.1529 114.864H53.8477C53.8477 114.546 53.9533 114.248 54.1646 113.973C54.3758 113.693 54.6623 113.475 55.0239 113.317C55.3892 113.16 55.7956 113.081 56.2432 113.081C56.9235 113.081 57.466 113.253 57.8706 113.597C58.2752 113.937 58.4829 114.417 58.4937 115.036V117.657C58.4937 118.18 58.5671 118.597 58.7139 118.909V119H57.3819ZM55.9478 118.06C56.2056 118.06 56.4473 117.997 56.6729 117.872C56.902 117.747 57.0739 117.578 57.1885 117.367V116.271H56.4849C56.0015 116.271 55.638 116.356 55.3946 116.524C55.1511 116.692 55.0293 116.93 55.0293 117.238C55.0293 117.489 55.1117 117.689 55.2764 117.84C55.4447 117.987 55.6685 118.06 55.9478 118.06ZM61.6768 113.188L61.7144 113.86C62.1441 113.341 62.708 113.081 63.4063 113.081C64.6166 113.081 65.2325 113.774 65.2539 115.16V119H63.9488V115.235C63.9488 114.866 63.8682 114.594 63.7071 114.418C63.5495 114.239 63.2899 114.15 62.9283 114.15C62.4019 114.15 62.0098 114.388 61.752 114.864V119H60.4468V113.188H61.6768ZM73.0401 111.18V116.406C73.0401 117.236 72.7733 117.895 72.2398 118.382C71.7099 118.866 71.0027 119.107 70.1182 119.107C69.223 119.107 68.5123 118.869 67.9859 118.393C67.4595 117.913 67.1963 117.249 67.1963 116.4V111.18H68.5499V116.411C68.5499 116.934 68.6824 117.333 68.9473 117.609C69.2123 117.885 69.6026 118.022 70.1182 118.022C71.1638 118.022 71.6866 117.471 71.6866 116.368V111.18H73.0401ZM76.1856 113.188L76.2232 113.86C76.6529 113.341 77.2169 113.081 77.9151 113.081C79.1254 113.081 79.7413 113.774 79.7628 115.16V119H78.4576V115.235C78.4576 114.866 78.377 114.594 78.2159 114.418C78.0583 114.239 77.7987 114.15 77.4371 114.15C76.9107 114.15 76.5186 114.388 76.2608 114.864V119H74.9556V113.188H76.1856ZM83.0909 119H81.7857V113.188H83.0909V119ZM81.7052 111.679C81.7052 111.479 81.7678 111.312 81.8932 111.18C82.0221 111.047 82.2047 110.981 82.441 110.981C82.6773 110.981 82.86 111.047 82.9889 111.18C83.1178 111.312 83.1822 111.479 83.1822 111.679C83.1822 111.876 83.1178 112.041 82.9889 112.173C82.86 112.302 82.6773 112.367 82.441 112.367C82.2047 112.367 82.0221 112.302 81.8932 112.173C81.7678 112.041 81.7052 111.876 81.7052 111.679ZM86.7574 111.776V113.188H87.7833V114.155H86.7574V117.399C86.7574 117.621 86.8004 117.783 86.8863 117.883C86.9759 117.979 87.1334 118.028 87.359 118.028C87.5094 118.028 87.6616 118.01 87.8155 117.974V118.984C87.5183 119.066 87.2319 119.107 86.9562 119.107C85.9536 119.107 85.4523 118.554 85.4523 117.448V114.155H84.4962V113.188H85.4523V111.776H86.7574ZM91.9494 119.107C91.1222 119.107 90.4508 118.848 89.9352 118.329C89.4232 117.806 89.1671 117.111 89.1671 116.245V116.083C89.1671 115.503 89.2781 114.986 89.5001 114.531C89.7257 114.073 90.0408 113.717 90.4454 113.462C90.8501 113.208 91.3012 113.081 91.799 113.081C92.5903 113.081 93.2008 113.333 93.6305 113.838C94.0638 114.343 94.2804 115.058 94.2804 115.981V116.508H90.483C90.5224 116.988 90.6818 117.367 90.9611 117.646C91.244 117.926 91.5984 118.065 92.0246 118.065C92.6225 118.065 93.1095 117.824 93.4855 117.34L94.1891 118.012C93.9564 118.359 93.6448 118.629 93.2545 118.823C92.8678 119.013 92.4328 119.107 91.9494 119.107ZM91.7936 114.128C91.4355 114.128 91.1455 114.254 90.9235 114.504C90.7051 114.755 90.5654 115.104 90.5045 115.552H92.9913V115.455C92.9627 115.018 92.8463 114.689 92.6422 114.467C92.4381 114.241 92.1552 114.128 91.7936 114.128ZM95.6588 116.051C95.6588 115.156 95.8665 114.438 96.2819 113.897C96.6973 113.353 97.2541 113.081 97.9523 113.081C98.5682 113.081 99.0659 113.296 99.4455 113.726V110.75H100.751V119H99.569L99.5046 118.398C99.1143 118.871 98.5933 119.107 97.9416 119.107C97.2612 119.107 96.7098 118.833 96.2873 118.286C95.8683 117.738 95.6588 116.993 95.6588 116.051ZM96.964 116.164C96.964 116.755 97.0768 117.217 97.3024 117.55C97.5316 117.879 97.8556 118.044 98.2746 118.044C98.8081 118.044 99.1984 117.806 99.4455 117.33V114.848C99.2056 114.383 98.8188 114.15 98.2853 114.15C97.8628 114.15 97.5369 114.318 97.3078 114.655C97.0786 114.988 96.964 115.491 96.964 116.164Z" fill="white"/>
              </g>
              <g id="Group 6">
              <path id="Rectangle 1_6" d="M102.728 138.5L107.343 126.5H131.272L126.657 138.5H102.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 39_6" d="M35.5196 138.5L35.9811 126.5H107.272L102.657 138.5H35.5196Z" fill="#2F2E2E" stroke="black"/>
              <path id="Rectangle 2_6" d="M126.728 138.5L131.343 126.5H155.272L150.657 138.5H126.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 3_6" d="M150.728 138.5L155.343 126.5H179.272L174.657 138.5H150.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 4_6" d="M174.728 138.5L179.343 126.5H203.272L198.657 138.5H174.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 5_6" d="M198.728 138.5L203.343 126.5H227.272L222.657 138.5H198.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 6_6" d="M222.728 138.5L227.343 126.5H251.272L246.657 138.5H222.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 7_6" d="M246.728 138.5L251.343 126.5H275.272L270.657 138.5H246.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 8_6" d="M270.728 138.5L275.343 126.5H299.272L294.657 138.5H270.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 9_6" d="M294.728 138.5L299.343 126.5H323.272L318.657 138.5H294.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 10_6" d="M318.728 138.5L323.343 126.5H347.272L342.657 138.5H318.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 11_6" d="M342.728 138.5L347.343 126.5H371.272L366.657 138.5H342.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 12_6" d="M366.728 138.5L371.343 126.5H395.272L390.657 138.5H366.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 13_6" d="M390.728 138.5L395.343 126.5H419.272L414.657 138.5H390.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 14_6" d="M414.728 138.5L419.343 126.5H443.272L438.657 138.5H414.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 15_6" d="M438.728 138.5L443.343 126.5H467.272L462.657 138.5H438.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 16_6" d="M462.728 138.5L467.343 126.5H491.272L486.657 138.5H462.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 17_6" d="M486.728 138.5L491.343 126.5H515.272L510.657 138.5H486.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 18_6" d="M510.728 138.5L515.343 126.5H539.272L534.657 138.5H510.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 21_6" d="M582.728 138.5L587.343 126.5H611.272L606.657 138.5H582.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 22_6" d="M606.728 138.5L611.343 126.5H635.272L630.657 138.5H606.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 23_6" d="M630.728 138.5L635.343 126.5H659.272L654.657 138.5H630.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 24_6" d="M654.728 138.5L659.343 126.5H683.272L678.657 138.5H654.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 25_6" d="M678.728 138.5L683.343 126.5H707.272L702.657 138.5H678.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 26_6" d="M702.728 138.5L707.343 126.5H731.272L726.657 138.5H702.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 27_6" d="M726.728 138.5L731.343 126.5H755.272L750.657 138.5H726.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 28_6" d="M750.728 138.5L755.343 126.5H779.272L774.657 138.5H750.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 29_6" d="M774.728 138.5L779.343 126.5H803.272L798.657 138.5H774.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 30_6" d="M798.728 138.5L803.343 126.5H827.272L822.657 138.5H798.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 31_6" d="M822.728 138.5L827.343 126.5H851.272L846.657 138.5H822.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 32_6" d="M846.728 138.5L851.343 126.5H875.272L870.657 138.5H846.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 33_6" d="M870.728 138.5L875.343 126.5H899.272L894.657 138.5H870.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 34_6" d="M894.728 138.5L899.343 126.5H923.272L918.657 138.5H894.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 35_6" d="M918.728 138.5L923.343 126.5H947.272L942.657 138.5H918.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 36_6" d="M942.728 138.5L947.343 126.5H971.272L966.657 138.5H942.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 37_6" d="M966.728 138.5L971.343 126.5H995.272L990.657 138.5H966.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 38_6" d="M990.728 138.5L995.343 126.5H1019.5V138.5H990.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 19_6" d="M534.728 138.5L539.343 126.5H563.272L558.657 138.5H534.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 20_6" d="M558.728 138.5L563.343 126.5H587.272L582.657 138.5H558.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Wolves" d="M49.9287 135.066L51.1318 129.18H52.48L50.6753 137H49.3755L47.8877 131.291L46.3677 137H45.0625L43.2578 129.18H44.606L45.8198 135.056L47.313 129.18H48.4517L49.9287 135.066ZM53.5362 134.041C53.5362 133.471 53.6489 132.959 53.8745 132.504C54.1001 132.046 54.417 131.695 54.8252 131.452C55.2334 131.205 55.7025 131.081 56.2324 131.081C57.0166 131.081 57.6522 131.333 58.1392 131.838C58.6297 132.343 58.8947 133.013 58.9341 133.847L58.9395 134.153C58.9395 134.726 58.8285 135.238 58.6065 135.689C58.388 136.141 58.0729 136.49 57.6612 136.737C57.2529 136.984 56.7803 137.107 56.2432 137.107C55.4232 137.107 54.7661 136.835 54.272 136.291C53.7814 135.743 53.5362 135.014 53.5362 134.105V134.041ZM54.8413 134.153C54.8413 134.751 54.9649 135.22 55.2119 135.561C55.459 135.897 55.8028 136.065 56.2432 136.065C56.6836 136.065 57.0256 135.894 57.2691 135.55C57.5161 135.206 57.6397 134.703 57.6397 134.041C57.6397 133.453 57.5126 132.988 57.2583 132.644C57.0077 132.3 56.6657 132.128 56.2324 132.128C55.8063 132.128 55.468 132.299 55.2173 132.639C54.9667 132.975 54.8413 133.48 54.8413 134.153ZM62.0367 137H60.7315V128.75H62.0367V137ZM66.1168 135.346L67.3467 131.188H68.6949L66.6807 137H65.5474L63.5171 131.188H64.8707L66.1168 135.346ZM72.6031 137.107C71.776 137.107 71.1046 136.848 70.5889 136.329C70.0769 135.806 69.8209 135.111 69.8209 134.245V134.083C69.8209 133.503 69.9319 132.986 70.1539 132.531C70.3795 132.073 70.6946 131.717 71.0992 131.462C71.5038 131.208 71.955 131.081 72.4527 131.081C73.2441 131.081 73.8546 131.333 74.2843 131.838C74.7175 132.343 74.9342 133.058 74.9342 133.981V134.508H71.1368C71.1762 134.988 71.3355 135.367 71.6148 135.646C71.8977 135.926 72.2522 136.065 72.6783 136.065C73.2763 136.065 73.7633 135.824 74.1392 135.34L74.8429 136.012C74.6101 136.359 74.2986 136.629 73.9083 136.823C73.5216 137.013 73.0865 137.107 72.6031 137.107ZM72.4473 132.128C72.0893 132.128 71.7992 132.254 71.5772 132.504C71.3588 132.755 71.2192 133.104 71.1583 133.552H73.6451V133.455C73.6165 133.018 73.5001 132.689 73.296 132.467C73.0919 132.241 72.809 132.128 72.4473 132.128ZM79.8146 135.421C79.8146 135.188 79.7179 135.011 79.5245 134.889C79.3347 134.767 79.0178 134.66 78.5738 134.567C78.1298 134.474 77.7592 134.356 77.462 134.212C76.8103 133.897 76.4845 133.441 76.4845 132.843C76.4845 132.341 76.6957 131.923 77.1183 131.586C77.5408 131.249 78.0779 131.081 78.7296 131.081C79.4243 131.081 79.9846 131.253 80.4107 131.597C80.8404 131.94 81.0553 132.386 81.0553 132.934H79.7501C79.7501 132.683 79.657 132.476 79.4708 132.311C79.2846 132.143 79.0375 132.059 78.7296 132.059C78.4431 132.059 78.2086 132.125 78.026 132.257C77.8469 132.39 77.7574 132.567 77.7574 132.789C77.7574 132.99 77.8416 133.145 78.0099 133.256C78.1782 133.367 78.5183 133.48 79.0304 133.595C79.5424 133.706 79.9435 133.84 80.2335 133.998C80.5271 134.152 80.7438 134.338 80.8834 134.556C81.0266 134.775 81.0982 135.04 81.0982 135.351C81.0982 135.874 80.8816 136.298 80.4483 136.624C80.0151 136.946 79.4475 137.107 78.7457 137.107C78.2695 137.107 77.8452 137.021 77.4728 136.85C77.1004 136.678 76.8103 136.441 76.6026 136.141C76.395 135.84 76.2911 135.516 76.2911 135.168H77.5587C77.5766 135.476 77.693 135.715 77.9078 135.883C78.1227 136.048 78.4073 136.13 78.7618 136.13C79.1056 136.13 79.367 136.065 79.546 135.937C79.725 135.804 79.8146 135.632 79.8146 135.421Z" fill="white"/>
              </g>
              <g id="Group 7">
              <path id="Rectangle 1_7" d="M102.728 156.5L107.343 144.5H131.272L126.657 156.5H102.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 39_7" d="M35.5196 156.5L35.9811 144.5H107.272L102.657 156.5H35.5196Z" fill="#2F2E2E" stroke="black"/>
              <path id="Rectangle 2_7" d="M126.728 156.5L131.343 144.5H155.272L150.657 156.5H126.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 3_7" d="M150.728 156.5L155.343 144.5H179.272L174.657 156.5H150.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 4_7" d="M174.728 156.5L179.343 144.5H203.272L198.657 156.5H174.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 5_7" d="M198.728 156.5L203.343 144.5H227.272L222.657 156.5H198.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 6_7" d="M222.728 156.5L227.343 144.5H251.272L246.657 156.5H222.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 7_7" d="M246.728 156.5L251.343 144.5H275.272L270.657 156.5H246.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 8_7" d="M270.728 156.5L275.343 144.5H299.272L294.657 156.5H270.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 9_7" d="M294.728 156.5L299.343 144.5H323.272L318.657 156.5H294.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 10_7" d="M318.728 156.5L323.343 144.5H347.272L342.657 156.5H318.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 11_7" d="M342.728 156.5L347.343 144.5H371.272L366.657 156.5H342.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 12_7" d="M366.728 156.5L371.343 144.5H395.272L390.657 156.5H366.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 13_7" d="M390.728 156.5L395.343 144.5H419.272L414.657 156.5H390.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 14_7" d="M414.728 156.5L419.343 144.5H443.272L438.657 156.5H414.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 15_7" d="M438.728 156.5L443.343 144.5H467.272L462.657 156.5H438.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 16_7" d="M462.728 156.5L467.343 144.5H491.272L486.657 156.5H462.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 17_7" d="M486.728 156.5L491.343 144.5H515.272L510.657 156.5H486.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 18_7" d="M510.728 156.5L515.343 144.5H539.272L534.657 156.5H510.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 21_7" d="M582.728 156.5L587.343 144.5H611.272L606.657 156.5H582.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 22_7" d="M606.728 156.5L611.343 144.5H635.272L630.657 156.5H606.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 23_7" d="M630.728 156.5L635.343 144.5H659.272L654.657 156.5H630.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 24_7" d="M654.728 156.5L659.343 144.5H683.272L678.657 156.5H654.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 25_7" d="M678.728 156.5L683.343 144.5H707.272L702.657 156.5H678.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 26_7" d="M702.728 156.5L707.343 144.5H731.272L726.657 156.5H702.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 27_7" d="M726.728 156.5L731.343 144.5H755.272L750.657 156.5H726.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 28_7" d="M750.728 156.5L755.343 144.5H779.272L774.657 156.5H750.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 29_7" d="M774.728 156.5L779.343 144.5H803.272L798.657 156.5H774.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 30_7" d="M798.728 156.5L803.343 144.5H827.272L822.657 156.5H798.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 31_7" d="M822.728 156.5L827.343 144.5H851.272L846.657 156.5H822.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 32_7" d="M846.728 156.5L851.343 144.5H875.272L870.657 156.5H846.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 33_7" d="M870.728 156.5L875.343 144.5H899.272L894.657 156.5H870.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 34_7" d="M894.728 156.5L899.343 144.5H923.272L918.657 156.5H894.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 35_7" d="M918.728 156.5L923.343 144.5H947.272L942.657 156.5H918.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 36_7" d="M942.728 156.5L947.343 144.5H971.272L966.657 156.5H942.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 37_7" d="M966.728 156.5L971.343 144.5H995.272L990.657 156.5H966.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 38_7" d="M990.728 156.5L995.343 144.5H1019.5V156.5H990.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 19_7" d="M534.728 156.5L539.343 144.5H563.272L558.657 156.5H534.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 20_7" d="M558.728 156.5L563.343 144.5H587.272L582.657 156.5H558.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Sheffield" d="M47.8823 152.986C47.8823 152.642 47.7606 152.377 47.5171 152.191C47.2772 152.005 46.8421 151.817 46.2119 151.627C45.5817 151.437 45.0804 151.226 44.708 150.993C43.9954 150.546 43.6392 149.962 43.6392 149.242C43.6392 148.612 43.8952 148.093 44.4072 147.685C44.9229 147.276 45.5907 147.072 46.4106 147.072C46.9549 147.072 47.4401 147.173 47.8662 147.373C48.2923 147.574 48.6271 147.86 48.8706 148.232C49.1141 148.601 49.2358 149.011 49.2358 149.462H47.8823C47.8823 149.054 47.7534 148.736 47.4956 148.506C47.2414 148.274 46.8761 148.157 46.3999 148.157C45.9559 148.157 45.6104 148.252 45.3633 148.442C45.1198 148.632 44.998 148.897 44.998 149.237C44.998 149.523 45.1305 149.763 45.3955 149.957C45.6605 150.146 46.0973 150.333 46.7061 150.515C47.3148 150.694 47.8035 150.9 48.1724 151.133C48.5412 151.362 48.8115 151.627 48.9834 151.928C49.1553 152.225 49.2412 152.574 49.2412 152.975C49.2412 153.627 48.9906 154.146 48.4893 154.533C47.9915 154.916 47.3148 155.107 46.459 155.107C45.8932 155.107 45.3722 155.004 44.896 154.796C44.4233 154.585 44.0545 154.295 43.7896 153.926C43.5282 153.557 43.3975 153.127 43.3975 152.637H44.7563C44.7563 153.081 44.9032 153.424 45.1968 153.668C45.4904 153.911 45.9111 154.033 46.459 154.033C46.9316 154.033 47.2861 153.938 47.5225 153.749C47.7624 153.555 47.8823 153.301 47.8823 152.986ZM52.1988 149.822C52.6249 149.328 53.1638 149.081 53.8154 149.081C55.0544 149.081 55.6828 149.788 55.7007 151.203V155H54.3955V151.251C54.3955 150.85 54.3078 150.567 54.1323 150.402C53.9605 150.234 53.7062 150.15 53.3696 150.15C52.8469 150.15 52.4566 150.383 52.1988 150.848V155H50.8936V146.75H52.1988V149.822ZM60.189 155.107C59.3619 155.107 58.6905 154.848 58.1748 154.329C57.6628 153.806 57.4068 153.111 57.4068 152.245V152.083C57.4068 151.503 57.5178 150.986 57.7398 150.531C57.9654 150.073 58.2805 149.717 58.6851 149.462C59.0897 149.208 59.5409 149.081 60.0386 149.081C60.83 149.081 61.4405 149.333 61.8702 149.838C62.3034 150.343 62.5201 151.058 62.5201 151.981V152.508H58.7227C58.7621 152.988 58.9214 153.367 59.2007 153.646C59.4836 153.926 59.8381 154.065 60.2642 154.065C60.8622 154.065 61.3492 153.824 61.7251 153.34L62.4288 154.012C62.196 154.359 61.8845 154.629 61.4942 154.823C61.1075 155.013 60.6724 155.107 60.189 155.107ZM60.0332 150.128C59.6752 150.128 59.3851 150.254 59.1631 150.504C58.9447 150.755 58.8051 151.104 58.7442 151.552H61.231V151.455C61.2024 151.018 61.086 150.689 60.8819 150.467C60.6778 150.241 60.3949 150.128 60.0332 150.128ZM64.6021 155V150.155H63.7159V149.188H64.6021V148.657C64.6021 148.012 64.7811 147.514 65.1392 147.164C65.4973 146.813 65.9986 146.637 66.6431 146.637C66.8723 146.637 67.1158 146.669 67.3736 146.734L67.3414 147.754C67.1981 147.726 67.0316 147.711 66.8419 147.711C66.2188 147.711 65.9073 148.032 65.9073 148.673V149.188H67.9053V148.791C67.9089 148.336 68.0056 147.946 68.1954 147.62C68.3852 147.294 68.6537 147.049 69.001 146.884C69.3484 146.72 69.7655 146.637 70.2525 146.637C70.539 146.637 70.8129 146.668 71.0743 146.729C71.3393 146.789 71.6132 146.866 71.8961 146.959L71.692 148.039C71.205 147.867 70.7556 147.781 70.3438 147.781C69.9463 147.781 69.6581 147.869 69.4791 148.044C69.3 148.216 69.2105 148.476 69.2105 148.823V149.188H70.3546V150.155H69.2105V155H67.9053V150.155H65.9073V155H64.6021ZM72.5137 155H71.2086V149.188H72.5137V155ZM77.1256 155.107C76.2984 155.107 75.627 154.848 75.1114 154.329C74.5994 153.806 74.3433 153.111 74.3433 152.245V152.083C74.3433 151.503 74.4543 150.986 74.6763 150.531C74.9019 150.073 75.217 149.717 75.6217 149.462C76.0263 149.208 76.4775 149.081 76.9752 149.081C77.7665 149.081 78.377 149.333 78.8067 149.838C79.24 150.343 79.4566 151.058 79.4566 151.981V152.508H75.6593C75.6986 152.988 75.858 153.367 76.1373 153.646C76.4202 153.926 76.7747 154.065 77.2008 154.065C77.7987 154.065 78.2857 153.824 78.6617 153.34L79.3653 154.012C79.1326 154.359 78.821 154.629 78.4307 154.823C78.044 155.013 77.609 155.107 77.1256 155.107ZM76.9698 150.128C76.6117 150.128 76.3217 150.254 76.0997 150.504C75.8813 150.755 75.7416 151.104 75.6807 151.552H78.1676V151.455C78.1389 151.018 78.0225 150.689 77.8184 150.467C77.6143 150.241 77.3315 150.128 76.9698 150.128ZM82.4679 155H81.1627V146.75H82.4679V155ZM84.2545 152.051C84.2545 151.156 84.4622 150.438 84.8776 149.897C85.2929 149.353 85.8497 149.081 86.548 149.081C87.1639 149.081 87.6616 149.296 88.0411 149.726V146.75H89.3463V155H88.1647L88.1002 154.398C87.7099 154.871 87.1889 155.107 86.5372 155.107C85.8569 155.107 85.3055 154.833 84.8829 154.286C84.464 153.738 84.2545 152.993 84.2545 152.051ZM85.5597 152.164C85.5597 152.755 85.6725 153.217 85.8981 153.55C86.1272 153.879 86.4513 154.044 86.8702 154.044C87.4038 154.044 87.7941 153.806 88.0411 153.33V150.848C87.8012 150.383 87.4145 150.15 86.881 150.15C86.4585 150.15 86.1326 150.318 85.9034 150.655C85.6743 150.988 85.5597 151.491 85.5597 152.164Z" fill="white"/>
              </g>
              <g id="Group 8">
              <path id="Rectangle 1_8" d="M102.728 174.5L107.343 162.5H131.272L126.657 174.5H102.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 39_8" d="M35.5196 174.5L35.9811 162.5H107.272L102.657 174.5H35.5196Z" fill="#2F2E2E" stroke="black"/>
              <path id="Rectangle 2_8" d="M126.728 174.5L131.343 162.5H155.272L150.657 174.5H126.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 3_8" d="M150.728 174.5L155.343 162.5H179.272L174.657 174.5H150.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 4_8" d="M174.728 174.5L179.343 162.5H203.272L198.657 174.5H174.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 5_8" d="M198.728 174.5L203.343 162.5H227.272L222.657 174.5H198.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 6_8" d="M222.728 174.5L227.343 162.5H251.272L246.657 174.5H222.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 7_8" d="M246.728 174.5L251.343 162.5H275.272L270.657 174.5H246.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 8_8" d="M270.728 174.5L275.343 162.5H299.272L294.657 174.5H270.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 9_8" d="M294.728 174.5L299.343 162.5H323.272L318.657 174.5H294.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 10_8" d="M318.728 174.5L323.343 162.5H347.272L342.657 174.5H318.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 11_8" d="M342.728 174.5L347.343 162.5H371.272L366.657 174.5H342.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 12_8" d="M366.728 174.5L371.343 162.5H395.272L390.657 174.5H366.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 13_8" d="M390.728 174.5L395.343 162.5H419.272L414.657 174.5H390.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 14_8" d="M414.728 174.5L419.343 162.5H443.272L438.657 174.5H414.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 15_8" d="M438.728 174.5L443.343 162.5H467.272L462.657 174.5H438.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 16_8" d="M462.728 174.5L467.343 162.5H491.272L486.657 174.5H462.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 17_8" d="M486.728 174.5L491.343 162.5H515.272L510.657 174.5H486.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 18_8" d="M510.728 174.5L515.343 162.5H539.272L534.657 174.5H510.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 21_8" d="M582.728 174.5L587.343 162.5H611.272L606.657 174.5H582.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 22_8" d="M606.728 174.5L611.343 162.5H635.272L630.657 174.5H606.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 23_8" d="M630.728 174.5L635.343 162.5H659.272L654.657 174.5H630.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 24_8" d="M654.728 174.5L659.343 162.5H683.272L678.657 174.5H654.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 25_8" d="M678.728 174.5L683.343 162.5H707.272L702.657 174.5H678.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 26_8" d="M702.728 174.5L707.343 162.5H731.272L726.657 174.5H702.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 27_8" d="M726.728 174.5L731.343 162.5H755.272L750.657 174.5H726.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 28_8" d="M750.728 174.5L755.343 162.5H779.272L774.657 174.5H750.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 29_8" d="M774.728 174.5L779.343 162.5H803.272L798.657 174.5H774.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 30_8" d="M798.728 174.5L803.343 162.5H827.272L822.657 174.5H798.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 31_8" d="M822.728 174.5L827.343 162.5H851.272L846.657 174.5H822.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 32_8" d="M846.728 174.5L851.343 162.5H875.272L870.657 174.5H846.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 33_8" d="M870.728 174.5L875.343 162.5H899.272L894.657 174.5H870.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 34_8" d="M894.728 174.5L899.343 162.5H923.272L918.657 174.5H894.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 35_8" d="M918.728 174.5L923.343 162.5H947.272L942.657 174.5H918.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 36_8" d="M942.728 174.5L947.343 162.5H971.272L966.657 174.5H942.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 37_8" d="M966.728 174.5L971.343 162.5H995.272L990.657 174.5H966.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 38_8" d="M990.728 174.5L995.343 162.5H1019.5V174.5H990.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 19_8" d="M534.728 174.5L539.343 162.5H563.272L558.657 174.5H534.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 20_8" d="M558.728 174.5L563.343 162.5H587.272L582.657 174.5H558.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Tottenham" d="M49.4453 166.275H47.0068V173H45.6587V166.275H43.2417V165.18H49.4453V166.275ZM49.5938 170.041C49.5938 169.471 49.7066 168.959 49.9321 168.504C50.1577 168.046 50.4746 167.695 50.8828 167.452C51.291 167.205 51.7601 167.081 52.2901 167.081C53.0742 167.081 53.7098 167.333 54.1968 167.838C54.6874 168.343 54.9523 169.013 54.9917 169.847L54.9971 170.153C54.9971 170.726 54.8861 171.238 54.6641 171.689C54.4457 172.141 54.1306 172.49 53.7188 172.737C53.3106 172.984 52.8379 173.107 52.3008 173.107C51.4808 173.107 50.8238 172.835 50.3296 172.291C49.839 171.743 49.5938 171.014 49.5938 170.105V170.041ZM50.8989 170.153C50.8989 170.751 51.0225 171.22 51.2696 171.561C51.5166 171.897 51.8604 172.065 52.3008 172.065C52.7412 172.065 53.0832 171.894 53.3267 171.55C53.5738 171.206 53.6973 170.703 53.6973 170.041C53.6973 169.453 53.5702 168.988 53.3159 168.644C53.0653 168.3 52.7233 168.128 52.2901 168.128C51.864 168.128 51.5256 168.299 51.2749 168.639C51.0243 168.975 50.8989 169.48 50.8989 170.153ZM58.3413 165.776V167.188H59.3672V168.155H58.3413V171.399C58.3413 171.621 58.3843 171.783 58.4703 171.883C58.5598 171.979 58.7173 172.028 58.9429 172.028C59.0933 172.028 59.2455 172.01 59.3995 171.974V172.984C59.1023 173.066 58.8158 173.107 58.5401 173.107C57.5375 173.107 57.0362 172.554 57.0362 171.448V168.155H56.0801V167.188H57.0362V165.776H58.3413ZM62.6094 165.776V167.188H63.6353V168.155H62.6094V171.399C62.6094 171.621 62.6524 171.783 62.7383 171.883C62.8279 171.979 62.9854 172.028 63.211 172.028C63.3614 172.028 63.5136 172.01 63.6675 171.974V172.984C63.3703 173.066 63.0839 173.107 62.8082 173.107C61.8056 173.107 61.3043 172.554 61.3043 171.448V168.155H60.3482V167.188H61.3043V165.776H62.6094ZM67.8013 173.107C66.9742 173.107 66.3028 172.848 65.7872 172.329C65.2751 171.806 65.0191 171.111 65.0191 170.245V170.083C65.0191 169.503 65.1301 168.986 65.3521 168.531C65.5777 168.073 65.8928 167.717 66.2974 167.462C66.7021 167.208 67.1532 167.081 67.651 167.081C68.4423 167.081 69.0528 167.333 69.4825 167.838C69.9158 168.343 70.1324 169.058 70.1324 169.981V170.508H66.335C66.3744 170.988 66.5338 171.367 66.8131 171.646C67.0959 171.926 67.4504 172.065 67.8765 172.065C68.4745 172.065 68.9615 171.824 69.3375 171.34L70.0411 172.012C69.8083 172.359 69.4968 172.629 69.1065 172.823C68.7198 173.013 68.2847 173.107 67.8013 173.107ZM67.6456 168.128C67.2875 168.128 66.9975 168.254 66.7755 168.504C66.557 168.755 66.4174 169.104 66.3565 169.552H68.8433V169.455C68.8147 169.018 68.6983 168.689 68.4942 168.467C68.2901 168.241 68.0072 168.128 67.6456 168.128ZM72.9664 167.188L73.004 167.86C73.4337 167.341 73.9977 167.081 74.6959 167.081C75.9062 167.081 76.5221 167.774 76.5436 169.16V173H75.2384V169.235C75.2384 168.866 75.1578 168.594 74.9967 168.418C74.8391 168.239 74.5795 168.15 74.2179 168.15C73.6915 168.15 73.2994 168.388 73.0416 168.864V173H71.7364V167.188H72.9664ZM79.7696 167.822C80.1958 167.328 80.7347 167.081 81.3863 167.081C82.6253 167.081 83.2537 167.788 83.2716 169.203V173H81.9664V169.251C81.9664 168.85 81.8787 168.567 81.7032 168.402C81.5314 168.234 81.2771 168.15 80.9405 168.15C80.4178 168.15 80.0275 168.383 79.7696 168.848V173H78.4645V164.75H79.7696V167.822ZM88.673 173C88.6157 172.889 88.5656 172.708 88.5226 172.458C88.1072 172.891 87.5988 173.107 86.9972 173.107C86.4135 173.107 85.9373 172.941 85.5685 172.608C85.1997 172.275 85.0153 171.863 85.0153 171.373C85.0153 170.753 85.2444 170.279 85.7028 169.949C86.1647 169.616 86.8235 169.45 87.6793 169.45H88.4796V169.068C88.4796 168.768 88.3955 168.528 88.2272 168.349C88.0589 168.166 87.8029 168.075 87.4591 168.075C87.1619 168.075 86.9184 168.15 86.7287 168.3C86.5389 168.447 86.444 168.635 86.444 168.864H85.1388C85.1388 168.546 85.2444 168.248 85.4557 167.973C85.667 167.693 85.9534 167.475 86.3151 167.317C86.6803 167.16 87.0867 167.081 87.5343 167.081C88.2147 167.081 88.7571 167.253 89.1618 167.597C89.5664 167.937 89.7741 168.417 89.7848 169.036V171.657C89.7848 172.18 89.8582 172.597 90.005 172.909V173H88.673ZM87.2389 172.06C87.4967 172.06 87.7384 171.997 87.964 171.872C88.1932 171.747 88.365 171.578 88.4796 171.367V170.271H87.776C87.2926 170.271 86.9292 170.356 86.6857 170.524C86.4422 170.692 86.3204 170.93 86.3204 171.238C86.3204 171.489 86.4028 171.689 86.5675 171.84C86.7358 171.987 86.9596 172.06 87.2389 172.06ZM92.984 167.188L93.0216 167.795C93.4298 167.319 93.9884 167.081 94.6974 167.081C95.4744 167.081 96.0062 167.378 96.2926 167.973C96.7152 167.378 97.3096 167.081 98.0758 167.081C98.7168 167.081 99.193 167.258 99.5046 167.613C99.8197 167.967 99.9808 168.49 99.9879 169.181V173H98.6828V169.219C98.6828 168.85 98.6022 168.58 98.4411 168.408C98.2799 168.236 98.0132 168.15 97.6408 168.15C97.3436 168.15 97.1001 168.23 96.9103 168.392C96.7241 168.549 96.5934 168.757 96.5182 169.015L96.5236 173H95.2184V169.176C95.2005 168.492 94.8514 168.15 94.1711 168.15C93.6483 168.15 93.2777 168.363 93.0592 168.789V173H91.7541V167.188H92.984Z" fill="white"/>
              </g>
              <g id="Group 9">
              <path id="Rectangle 1_9" d="M101.728 192.5L106.343 180.5H130.272L125.657 192.5H101.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 39_9" d="M34.5196 192.5L34.9811 180.5H106.272L101.657 192.5H34.5196Z" fill="#2F2E2E" stroke="black"/>
              <path id="Rectangle 2_9" d="M125.728 192.5L130.343 180.5H154.272L149.657 192.5H125.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 3_9" d="M149.728 192.5L154.343 180.5H178.272L173.657 192.5H149.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 4_9" d="M173.728 192.5L178.343 180.5H202.272L197.657 192.5H173.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 5_9" d="M197.728 192.5L202.343 180.5H226.272L221.657 192.5H197.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 6_9" d="M221.728 192.5L226.343 180.5H250.272L245.657 192.5H221.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 7_9" d="M245.728 192.5L250.343 180.5H274.272L269.657 192.5H245.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 8_9" d="M269.728 192.5L274.343 180.5H298.272L293.657 192.5H269.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 9_9" d="M293.728 192.5L298.343 180.5H322.272L317.657 192.5H293.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 10_9" d="M317.728 192.5L322.343 180.5H346.272L341.657 192.5H317.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 11_9" d="M341.728 192.5L346.343 180.5H370.272L365.657 192.5H341.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 12_9" d="M365.728 192.5L370.343 180.5H394.272L389.657 192.5H365.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 13_9" d="M389.728 192.5L394.343 180.5H418.272L413.657 192.5H389.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 14_9" d="M413.728 192.5L418.343 180.5H442.272L437.657 192.5H413.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 15_9" d="M437.728 192.5L442.343 180.5H466.272L461.657 192.5H437.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 16_9" d="M461.728 192.5L466.343 180.5H490.272L485.657 192.5H461.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 17_9" d="M485.728 192.5L490.343 180.5H514.272L509.657 192.5H485.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 18_9" d="M509.728 192.5L514.343 180.5H538.272L533.657 192.5H509.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 21_9" d="M581.728 192.5L586.343 180.5H610.272L605.657 192.5H581.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 22_9" d="M605.728 192.5L610.343 180.5H634.272L629.657 192.5H605.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 23_9" d="M629.728 192.5L634.343 180.5H658.272L653.657 192.5H629.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 24_9" d="M653.728 192.5L658.343 180.5H682.272L677.657 192.5H653.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 25_9" d="M677.728 192.5L682.343 180.5H706.272L701.657 192.5H677.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 26_9" d="M701.728 192.5L706.343 180.5H730.272L725.657 192.5H701.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 27_9" d="M725.728 192.5L730.343 180.5H754.272L749.657 192.5H725.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 28_9" d="M749.728 192.5L754.343 180.5H778.272L773.657 192.5H749.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 29_9" d="M773.728 192.5L778.343 180.5H802.272L797.657 192.5H773.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 30_9" d="M797.728 192.5L802.343 180.5H826.272L821.657 192.5H797.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 31_9" d="M821.728 192.5L826.343 180.5H850.272L845.657 192.5H821.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 32_9" d="M845.728 192.5L850.343 180.5H874.272L869.657 192.5H845.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 33_9" d="M869.728 192.5L874.343 180.5H898.272L893.657 192.5H869.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 34_9" d="M893.728 192.5L898.343 180.5H922.272L917.657 192.5H893.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 35_9" d="M917.728 192.5L922.343 180.5H946.272L941.657 192.5H917.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 36_9" d="M941.728 192.5L946.343 180.5H970.272L965.657 192.5H941.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 37_9" d="M965.728 192.5L970.343 180.5H994.272L989.657 192.5H965.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 38_9" d="M989.728 192.5L994.343 180.5H1018.5V192.5H989.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 19_9" d="M533.728 192.5L538.343 180.5H562.272L557.657 192.5H533.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 20_9" d="M557.728 192.5L562.343 180.5H586.272L581.657 192.5H557.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Arsenal" d="M48.1724 189.179H45.1431L44.5093 191H43.0967L46.0508 183.18H47.27L50.2295 191H48.8115L48.1724 189.179ZM45.5244 188.083H47.791L46.6577 184.839L45.5244 188.083ZM54.6426 186.381C54.4707 186.352 54.2935 186.338 54.1109 186.338C53.5129 186.338 53.11 186.567 52.9024 187.025V191H51.5972V185.188H52.8433L52.8755 185.838C53.1906 185.333 53.6275 185.081 54.1861 185.081C54.3723 185.081 54.5262 185.106 54.648 185.156L54.6426 186.381ZM59.3296 189.421C59.3296 189.188 59.2329 189.011 59.0396 188.889C58.8498 188.767 58.5329 188.66 58.0889 188.567C57.6449 188.474 57.2743 188.356 56.9771 188.212C56.3254 187.897 55.9996 187.441 55.9996 186.843C55.9996 186.341 56.2108 185.923 56.6333 185.586C57.0559 185.249 57.593 185.081 58.2447 185.081C58.9393 185.081 59.4997 185.253 59.9258 185.597C60.3555 185.94 60.5704 186.386 60.5704 186.934H59.2652C59.2652 186.683 59.1721 186.476 58.9859 186.311C58.7997 186.143 58.5526 186.059 58.2447 186.059C57.9582 186.059 57.7237 186.125 57.5411 186.257C57.362 186.39 57.2725 186.567 57.2725 186.789C57.2725 186.99 57.3566 187.145 57.5249 187.256C57.6932 187.367 58.0334 187.48 58.5454 187.595C59.0575 187.706 59.4585 187.84 59.7486 187.998C60.0422 188.152 60.2588 188.338 60.3985 188.556C60.5417 188.775 60.6133 189.04 60.6133 189.351C60.6133 189.874 60.3967 190.298 59.9634 190.624C59.5301 190.946 58.9626 191.107 58.2608 191.107C57.7845 191.107 57.3602 191.021 56.9878 190.85C56.6154 190.678 56.3254 190.441 56.1177 190.141C55.91 189.84 55.8062 189.516 55.8062 189.168H57.0738C57.0917 189.476 57.208 189.715 57.4229 189.883C57.6377 190.048 57.9224 190.13 58.2769 190.13C58.6206 190.13 58.882 190.065 59.0611 189.937C59.2401 189.804 59.3296 189.632 59.3296 189.421ZM64.919 191.107C64.0919 191.107 63.4205 190.848 62.9048 190.329C62.3928 189.806 62.1368 189.111 62.1368 188.245V188.083C62.1368 187.503 62.2478 186.986 62.4698 186.531C62.6954 186.073 63.0105 185.717 63.4151 185.462C63.8197 185.208 64.2709 185.081 64.7686 185.081C65.56 185.081 66.1705 185.333 66.6002 185.838C67.0334 186.343 67.2501 187.058 67.2501 187.981V188.508H63.4527C63.4921 188.988 63.6514 189.367 63.9307 189.646C64.2136 189.926 64.5681 190.065 64.9942 190.065C65.5922 190.065 66.0792 189.824 66.4551 189.34L67.1588 190.012C66.926 190.359 66.6145 190.629 66.2242 190.823C65.8375 191.013 65.4024 191.107 64.919 191.107ZM64.7632 186.128C64.4052 186.128 64.1151 186.254 63.8931 186.504C63.6747 186.755 63.5351 187.104 63.4742 187.552H65.961V187.455C65.9324 187.018 65.816 186.689 65.6119 186.467C65.4078 186.241 65.1249 186.128 64.7632 186.128ZM70.0841 185.188L70.1217 185.86C70.5513 185.341 71.1153 185.081 71.8136 185.081C73.0238 185.081 73.6397 185.774 73.6612 187.16V191H72.356V187.235C72.356 186.866 72.2755 186.594 72.1143 186.418C71.9568 186.239 71.6972 186.15 71.3355 186.15C70.8092 186.15 70.4171 186.388 70.1593 186.864V191H68.8541V185.188H70.0841ZM79.0733 191C79.016 190.889 78.9659 190.708 78.9229 190.458C78.5076 190.891 77.9991 191.107 77.3976 191.107C76.8139 191.107 76.3377 190.941 75.9688 190.608C75.6 190.275 75.4156 189.863 75.4156 189.373C75.4156 188.753 75.6448 188.279 76.1031 187.949C76.565 187.616 77.2239 187.45 78.0797 187.45H78.88V187.068C78.88 186.768 78.7958 186.528 78.6275 186.349C78.4592 186.166 78.2032 186.075 77.8595 186.075C77.5623 186.075 77.3188 186.15 77.129 186.3C76.9392 186.447 76.8443 186.635 76.8443 186.864H75.5392C75.5392 186.546 75.6448 186.248 75.8561 185.973C76.0673 185.693 76.3538 185.475 76.7154 185.317C77.0807 185.16 77.4871 185.081 77.9347 185.081C78.615 185.081 79.1575 185.253 79.5621 185.597C79.9667 185.937 80.1744 186.417 80.1852 187.036V189.657C80.1852 190.18 80.2586 190.597 80.4054 190.909V191H79.0733ZM77.6393 190.06C77.8971 190.06 78.1388 189.997 78.3644 189.872C78.5935 189.747 78.7654 189.578 78.88 189.367V188.271H78.1764C77.693 188.271 77.3295 188.356 77.086 188.524C76.8425 188.692 76.7208 188.93 76.7208 189.238C76.7208 189.489 76.8032 189.689 76.9679 189.84C77.1362 189.987 77.36 190.06 77.6393 190.06ZM83.5455 191H82.2404V182.75H83.5455V191Z" fill="white"/>
              </g>
              <g id="Group 10">
              <path id="Rectangle 1_10" d="M102.728 210.5L107.343 198.5H131.272L126.657 210.5H102.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 39_10" d="M35.5196 210.5L35.9811 198.5H107.272L102.657 210.5H35.5196Z" fill="#2F2E2E" stroke="black"/>
              <path id="Rectangle 2_10" d="M126.728 210.5L131.343 198.5H155.272L150.657 210.5H126.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 3_10" d="M150.728 210.5L155.343 198.5H179.272L174.657 210.5H150.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 4_10" d="M174.728 210.5L179.343 198.5H203.272L198.657 210.5H174.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 5_10" d="M198.728 210.5L203.343 198.5H227.272L222.657 210.5H198.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 6_10" d="M222.728 210.5L227.343 198.5H251.272L246.657 210.5H222.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 7_10" d="M246.728 210.5L251.343 198.5H275.272L270.657 210.5H246.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 8_10" d="M270.728 210.5L275.343 198.5H299.272L294.657 210.5H270.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 9_10" d="M294.728 210.5L299.343 198.5H323.272L318.657 210.5H294.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 10_10" d="M318.728 210.5L323.343 198.5H347.272L342.657 210.5H318.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 11_10" d="M342.728 210.5L347.343 198.5H371.272L366.657 210.5H342.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 12_10" d="M366.728 210.5L371.343 198.5H395.272L390.657 210.5H366.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 13_10" d="M390.728 210.5L395.343 198.5H419.272L414.657 210.5H390.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 14_10" d="M414.728 210.5L419.343 198.5H443.272L438.657 210.5H414.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 15_10" d="M438.728 210.5L443.343 198.5H467.272L462.657 210.5H438.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 16_10" d="M462.728 210.5L467.343 198.5H491.272L486.657 210.5H462.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 17_10" d="M486.728 210.5L491.343 198.5H515.272L510.657 210.5H486.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 18_10" d="M510.728 210.5L515.343 198.5H539.272L534.657 210.5H510.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 21_10" d="M582.728 210.5L587.343 198.5H611.272L606.657 210.5H582.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 22_10" d="M606.728 210.5L611.343 198.5H635.272L630.657 210.5H606.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 23_10" d="M630.728 210.5L635.343 198.5H659.272L654.657 210.5H630.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 24_10" d="M654.728 210.5L659.343 198.5H683.272L678.657 210.5H654.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 25_10" d="M678.728 210.5L683.343 198.5H707.272L702.657 210.5H678.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 26_10" d="M702.728 210.5L707.343 198.5H731.272L726.657 210.5H702.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 27_10" d="M726.728 210.5L731.343 198.5H755.272L750.657 210.5H726.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 28_10" d="M750.728 210.5L755.343 198.5H779.272L774.657 210.5H750.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 29_10" d="M774.728 210.5L779.343 198.5H803.272L798.657 210.5H774.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 30_10" d="M798.728 210.5L803.343 198.5H827.272L822.657 210.5H798.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 31_10" d="M822.728 210.5L827.343 198.5H851.272L846.657 210.5H822.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 32_10" d="M846.728 210.5L851.343 198.5H875.272L870.657 210.5H846.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 33_10" d="M870.728 210.5L875.343 198.5H899.272L894.657 210.5H870.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 34_10" d="M894.728 210.5L899.343 198.5H923.272L918.657 210.5H894.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 35_10" d="M918.728 210.5L923.343 198.5H947.272L942.657 210.5H918.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 36_10" d="M942.728 210.5L947.343 198.5H971.272L966.657 210.5H942.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 37_10" d="M966.728 210.5L971.343 198.5H995.272L990.657 210.5H966.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 38_10" d="M990.728 210.5L995.343 198.5H1019.5V210.5H990.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 19_10" d="M534.728 210.5L539.343 198.5H563.272L558.657 210.5H534.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 20_10" d="M558.728 210.5L563.343 198.5H587.272L582.657 210.5H558.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Burnley" d="M43.7949 209V201.18H46.4751C47.3595 201.18 48.0327 201.357 48.4946 201.711C48.9565 202.066 49.1875 202.594 49.1875 203.296C49.1875 203.654 49.0908 203.976 48.8975 204.263C48.7041 204.549 48.4212 204.771 48.0488 204.929C48.4714 205.043 48.7972 205.26 49.0264 205.579C49.2591 205.894 49.3755 206.273 49.3755 206.717C49.3755 207.451 49.1392 208.015 48.6665 208.409C48.1974 208.803 47.5243 209 46.647 209H43.7949ZM45.1538 205.471V207.915H46.6631C47.0892 207.915 47.4222 207.809 47.6621 207.598C47.902 207.387 48.022 207.093 48.022 206.717C48.022 205.904 47.6066 205.489 46.7759 205.471H45.1538ZM45.1538 204.472H46.4858C46.9084 204.472 47.2378 204.377 47.4741 204.188C47.714 203.994 47.834 203.722 47.834 203.371C47.834 202.984 47.723 202.705 47.501 202.533C47.2826 202.361 46.9406 202.275 46.4751 202.275H45.1538V204.472ZM54.7339 208.431C54.3508 208.882 53.8065 209.107 53.1011 209.107C52.4709 209.107 51.9929 208.923 51.667 208.554C51.3447 208.185 51.1836 207.652 51.1836 206.954V203.188H52.4888V206.938C52.4888 207.675 52.7949 208.044 53.4072 208.044C54.041 208.044 54.4689 207.817 54.6909 207.362V203.188H55.9961V209H54.7661L54.7339 208.431ZM60.9732 204.381C60.8013 204.352 60.6241 204.338 60.4414 204.338C59.8435 204.338 59.4406 204.567 59.2329 205.025V209H57.9278V203.188H59.1739L59.2061 203.838C59.5212 203.333 59.958 203.081 60.5166 203.081C60.7028 203.081 60.8568 203.106 60.9786 203.156L60.9732 204.381ZM63.6138 203.188L63.6514 203.86C64.0811 203.341 64.6451 203.081 65.3433 203.081C66.5536 203.081 67.1695 203.774 67.191 205.16V209H65.8858V205.235C65.8858 204.866 65.8052 204.594 65.6441 204.418C65.4866 204.239 65.2269 204.15 64.8653 204.15C64.3389 204.15 63.9468 204.388 63.689 204.864V209H62.3838V203.188H63.6138ZM70.5191 209H69.2139V200.75H70.5191V209ZM75.1095 209.107C74.2823 209.107 73.6109 208.848 73.0953 208.329C72.5833 207.806 72.3272 207.111 72.3272 206.245V206.083C72.3272 205.503 72.4382 204.986 72.6603 204.531C72.8858 204.073 73.2009 203.717 73.6056 203.462C74.0102 203.208 74.4614 203.081 74.9591 203.081C75.7504 203.081 76.3609 203.333 76.7906 203.838C77.2239 204.343 77.4405 205.058 77.4405 205.981V206.508H73.6432C73.6826 206.988 73.8419 207.367 74.1212 207.646C74.4041 207.926 74.7586 208.065 75.1847 208.065C75.7826 208.065 76.2696 207.824 76.6456 207.34L77.3492 208.012C77.1165 208.359 76.8049 208.629 76.4146 208.823C76.0279 209.013 75.5929 209.107 75.1095 209.107ZM74.9537 204.128C74.5956 204.128 74.3056 204.254 74.0836 204.504C73.8652 204.755 73.7255 205.104 73.6646 205.552H76.1515V205.455C76.1228 205.018 76.0064 204.689 75.8023 204.467C75.5982 204.241 75.3154 204.128 74.9537 204.128ZM81.0211 207.131L82.2028 203.188H83.5939L81.2843 209.881C80.9298 210.858 80.3282 211.347 79.4796 211.347C79.2898 211.347 79.0804 211.315 78.8512 211.25V210.241L79.0983 210.257C79.4277 210.257 79.6748 210.196 79.8395 210.074C80.0078 209.956 80.1403 209.756 80.2369 209.473L80.4249 208.973L78.3839 203.188H79.7911L81.0211 207.131Z" fill="white"/>
              </g>
              <g id="Group 11">
              <path id="Rectangle 1_11" d="M103.728 228.5L108.343 216.5H132.272L127.657 228.5H103.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 39_11" d="M36.5196 228.5L36.9811 216.5H108.272L103.657 228.5H36.5196Z" fill="#2F2E2E" stroke="black"/>
              <path id="Rectangle 2_11" d="M127.728 228.5L132.343 216.5H156.272L151.657 228.5H127.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 3_11" d="M151.728 228.5L156.343 216.5H180.272L175.657 228.5H151.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 4_11" d="M175.728 228.5L180.343 216.5H204.272L199.657 228.5H175.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 5_11" d="M199.728 228.5L204.343 216.5H228.272L223.657 228.5H199.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 6_11" d="M223.728 228.5L228.343 216.5H252.272L247.657 228.5H223.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 7_11" d="M247.728 228.5L252.343 216.5H276.272L271.657 228.5H247.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 8_11" d="M271.728 228.5L276.343 216.5H300.272L295.657 228.5H271.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 9_11" d="M295.728 228.5L300.343 216.5H324.272L319.657 228.5H295.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 10_11" d="M319.728 228.5L324.343 216.5H348.272L343.657 228.5H319.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 11_11" d="M343.728 228.5L348.343 216.5H372.272L367.657 228.5H343.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 12_11" d="M367.728 228.5L372.343 216.5H396.272L391.657 228.5H367.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 13_11" d="M391.728 228.5L396.343 216.5H420.272L415.657 228.5H391.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 14_11" d="M415.728 228.5L420.343 216.5H444.272L439.657 228.5H415.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 15_11" d="M439.728 228.5L444.343 216.5H468.272L463.657 228.5H439.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 16_11" d="M463.728 228.5L468.343 216.5H492.272L487.657 228.5H463.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 17_11" d="M487.728 228.5L492.343 216.5H516.272L511.657 228.5H487.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 18_11" d="M511.728 228.5L516.343 216.5H540.272L535.657 228.5H511.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 21_11" d="M583.728 228.5L588.343 216.5H612.272L607.657 228.5H583.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 22_11" d="M607.728 228.5L612.343 216.5H636.272L631.657 228.5H607.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 23_11" d="M631.728 228.5L636.343 216.5H660.272L655.657 228.5H631.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 24_11" d="M655.728 228.5L660.343 216.5H684.272L679.657 228.5H655.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 25_11" d="M679.728 228.5L684.343 216.5H708.272L703.657 228.5H679.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 26_11" d="M703.728 228.5L708.343 216.5H732.272L727.657 228.5H703.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 27_11" d="M727.728 228.5L732.343 216.5H756.272L751.657 228.5H727.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 28_11" d="M751.728 228.5L756.343 216.5H780.272L775.657 228.5H751.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 29_11" d="M775.728 228.5L780.343 216.5H804.272L799.657 228.5H775.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 30_11" d="M799.728 228.5L804.343 216.5H828.272L823.657 228.5H799.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 31_11" d="M823.728 228.5L828.343 216.5H852.272L847.657 228.5H823.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 32_11" d="M847.728 228.5L852.343 216.5H876.272L871.657 228.5H847.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 33_11" d="M871.728 228.5L876.343 216.5H900.272L895.657 228.5H871.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 34_11" d="M895.728 228.5L900.343 216.5H924.272L919.657 228.5H895.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 35_11" d="M919.728 228.5L924.343 216.5H948.272L943.657 228.5H919.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 36_11" d="M943.728 228.5L948.343 216.5H972.272L967.657 228.5H943.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 37_11" d="M967.728 228.5L972.343 216.5H996.272L991.657 228.5H967.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 38_11" d="M991.728 228.5L996.343 216.5H1020.5V228.5H991.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 19_11" d="M535.728 228.5L540.343 216.5H564.272L559.657 228.5H535.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 20_11" d="M559.728 228.5L564.343 216.5H588.272L583.657 228.5H559.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="C.Palace" d="M49.7622 224.454C49.6834 225.288 49.3755 225.94 48.8384 226.409C48.3013 226.875 47.5869 227.107 46.6953 227.107C46.0723 227.107 45.5226 226.961 45.0464 226.667C44.5737 226.37 44.2085 225.949 43.9507 225.405C43.6929 224.861 43.5586 224.229 43.5479 223.509V222.778C43.5479 222.041 43.6785 221.391 43.9399 220.829C44.2013 220.266 44.5755 219.833 45.0625 219.529C45.5531 219.224 46.1188 219.072 46.7598 219.072C47.6227 219.072 48.3174 219.307 48.8438 219.776C49.3701 220.245 49.6763 220.907 49.7622 221.763H48.4087C48.3442 221.201 48.1795 220.796 47.9146 220.549C47.6532 220.299 47.2682 220.173 46.7598 220.173C46.1689 220.173 45.7142 220.39 45.3955 220.823C45.0804 221.253 44.9193 221.885 44.9121 222.719V223.412C44.9121 224.257 45.0625 224.902 45.3633 225.346C45.6676 225.79 46.1117 226.012 46.6953 226.012C47.2288 226.012 47.6299 225.892 47.8984 225.652C48.167 225.412 48.3371 225.013 48.4087 224.454H49.7622ZM52.2739 225.625C52.5174 225.625 52.7054 225.695 52.8379 225.834C52.9704 225.971 53.0366 226.142 53.0366 226.35C53.0366 226.554 52.9704 226.724 52.8379 226.86C52.7054 226.993 52.5174 227.059 52.2739 227.059C52.0412 227.059 51.8568 226.993 51.7207 226.86C51.5847 226.728 51.5166 226.558 51.5166 226.35C51.5166 226.142 51.5829 225.971 51.7154 225.834C51.8478 225.695 52.034 225.625 52.2739 225.625ZM56.6226 224.094V227H55.2637V219.18H58.2554C59.1291 219.18 59.822 219.407 60.334 219.862C60.8496 220.317 61.1075 220.918 61.1075 221.667C61.1075 222.433 60.855 223.029 60.3501 223.455C59.8488 223.881 59.1452 224.094 58.2393 224.094H56.6226ZM56.6226 223.004H58.2554C58.7388 223.004 59.1076 222.891 59.3619 222.666C59.6161 222.436 59.7432 222.107 59.7432 221.677C59.7432 221.255 59.6143 220.918 59.3565 220.667C59.0987 220.413 58.7442 220.283 58.293 220.275H56.6226V223.004ZM66.1866 227C66.1293 226.889 66.0792 226.708 66.0362 226.458C65.6208 226.891 65.1124 227.107 64.5108 227.107C63.9271 227.107 63.4509 226.941 63.0821 226.608C62.7133 226.275 62.5289 225.863 62.5289 225.373C62.5289 224.753 62.758 224.279 63.2164 223.949C63.6783 223.616 64.3371 223.45 65.1929 223.45H65.9932V223.068C65.9932 222.768 65.9091 222.528 65.7408 222.349C65.5725 222.166 65.3165 222.075 64.9727 222.075C64.6755 222.075 64.432 222.15 64.2422 222.3C64.0525 222.447 63.9576 222.635 63.9576 222.864H62.6524C62.6524 222.546 62.758 222.248 62.9693 221.973C63.1806 221.693 63.467 221.475 63.8287 221.317C64.1939 221.16 64.6003 221.081 65.0479 221.081C65.7282 221.081 66.2707 221.253 66.6754 221.597C67.08 221.937 67.2877 222.417 67.2984 223.036V225.657C67.2984 226.18 67.3718 226.597 67.5186 226.909V227H66.1866ZM64.7525 226.06C65.0103 226.06 65.252 225.997 65.4776 225.872C65.7068 225.747 65.8786 225.578 65.9932 225.367V224.271H65.2896C64.8062 224.271 64.4428 224.356 64.1993 224.524C63.9558 224.692 63.834 224.93 63.834 225.238C63.834 225.489 63.9164 225.689 64.0811 225.84C64.2494 225.987 64.4732 226.06 64.7525 226.06ZM70.6588 227H69.3536V218.75H70.6588V227ZM76.1622 227C76.1049 226.889 76.0548 226.708 76.0118 226.458C75.5965 226.891 75.088 227.107 74.4864 227.107C73.9028 227.107 73.4265 226.941 73.0577 226.608C72.6889 226.275 72.5045 225.863 72.5045 225.373C72.5045 224.753 72.7337 224.279 73.192 223.949C73.6539 223.616 74.3128 223.45 75.1686 223.45H75.9688V223.068C75.9688 222.768 75.8847 222.528 75.7164 222.349C75.5481 222.166 75.2921 222.075 74.9483 222.075C74.6511 222.075 74.4076 222.15 74.2179 222.3C74.0281 222.447 73.9332 222.635 73.9332 222.864H72.628C72.628 222.546 72.7337 222.248 72.9449 221.973C73.1562 221.693 73.4426 221.475 73.8043 221.317C74.1695 221.16 74.5759 221.081 75.0235 221.081C75.7039 221.081 76.2464 221.253 76.651 221.597C77.0556 221.937 77.2633 222.417 77.274 223.036V225.657C77.274 226.18 77.3474 226.597 77.4942 226.909V227H76.1622ZM74.7281 226.06C74.9859 226.06 75.2276 225.997 75.4532 225.872C75.6824 225.747 75.8543 225.578 75.9688 225.367V224.271H75.2652C74.7818 224.271 74.4184 224.356 74.1749 224.524C73.9314 224.692 73.8097 224.93 73.8097 225.238C73.8097 225.489 73.892 225.689 74.0567 225.84C74.225 225.987 74.4488 226.06 74.7281 226.06ZM81.6334 226.065C81.9593 226.065 82.2296 225.971 82.4445 225.781C82.6593 225.591 82.7739 225.356 82.7882 225.077H84.0182C84.0039 225.439 83.8911 225.777 83.6798 226.092C83.4685 226.404 83.1821 226.651 82.8204 226.833C82.4588 227.016 82.0685 227.107 81.6495 227.107C80.8367 227.107 80.1922 226.844 79.7159 226.318C79.2397 225.792 79.0016 225.065 79.0016 224.137V224.003C79.0016 223.118 79.2379 222.411 79.7106 221.881C80.1832 221.348 80.8278 221.081 81.6442 221.081C82.3352 221.081 82.8974 221.283 83.3307 221.688C83.7675 222.089 83.9967 222.617 84.0182 223.272H82.7882C82.7739 222.939 82.6593 222.666 82.4445 222.451C82.2332 222.236 81.9628 222.128 81.6334 222.128C81.2109 222.128 80.885 222.282 80.6559 222.59C80.4267 222.895 80.3103 223.358 80.3068 223.981V224.191C80.3068 224.821 80.4196 225.292 80.6451 225.604C80.8743 225.911 81.2037 226.065 81.6334 226.065ZM88.1681 227.107C87.341 227.107 86.6696 226.848 86.1539 226.329C85.6419 225.806 85.3859 225.111 85.3859 224.245V224.083C85.3859 223.503 85.4969 222.986 85.7189 222.531C85.9445 222.073 86.2596 221.717 86.6642 221.462C87.0688 221.208 87.52 221.081 88.0177 221.081C88.8091 221.081 89.4196 221.333 89.8493 221.838C90.2825 222.343 90.4992 223.058 90.4992 223.981V224.508H86.7018C86.7412 224.988 86.9005 225.367 87.1798 225.646C87.4627 225.926 87.8172 226.065 88.2433 226.065C88.8413 226.065 89.3283 225.824 89.7042 225.34L90.4079 226.012C90.1751 226.359 89.8636 226.629 89.4733 226.823C89.0866 227.013 88.6515 227.107 88.1681 227.107ZM88.0123 222.128C87.6543 222.128 87.3642 222.254 87.1422 222.504C86.9238 222.755 86.7842 223.104 86.7233 223.552H89.2101V223.455C89.1815 223.018 89.0651 222.689 88.861 222.467C88.6569 222.241 88.374 222.128 88.0123 222.128Z" fill="white"/>
              </g>
              <g id="Group 12">
              <path id="Rectangle 1_12" d="M103.728 247.5L108.343 235.5H132.272L127.657 247.5H103.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 39_12" d="M36.5196 247.5L36.9811 235.5H108.272L103.657 247.5H36.5196Z" fill="#2F2E2E" stroke="black"/>
              <path id="Rectangle 2_12" d="M127.728 247.5L132.343 235.5H156.272L151.657 247.5H127.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 3_12" d="M151.728 247.5L156.343 235.5H180.272L175.657 247.5H151.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 4_12" d="M175.728 247.5L180.343 235.5H204.272L199.657 247.5H175.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 5_12" d="M199.728 247.5L204.343 235.5H228.272L223.657 247.5H199.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 6_12" d="M223.728 247.5L228.343 235.5H252.272L247.657 247.5H223.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 7_12" d="M247.728 247.5L252.343 235.5H276.272L271.657 247.5H247.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 8_12" d="M271.728 247.5L276.343 235.5H300.272L295.657 247.5H271.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 9_12" d="M295.728 247.5L300.343 235.5H324.272L319.657 247.5H295.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 10_12" d="M319.728 247.5L324.343 235.5H348.272L343.657 247.5H319.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 11_12" d="M343.728 247.5L348.343 235.5H372.272L367.657 247.5H343.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 12_12" d="M367.728 247.5L372.343 235.5H396.272L391.657 247.5H367.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 13_12" d="M391.728 247.5L396.343 235.5H420.272L415.657 247.5H391.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 14_12" d="M415.728 247.5L420.343 235.5H444.272L439.657 247.5H415.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 15_12" d="M439.728 247.5L444.343 235.5H468.272L463.657 247.5H439.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 16_12" d="M463.728 247.5L468.343 235.5H492.272L487.657 247.5H463.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 17_12" d="M487.728 247.5L492.343 235.5H516.272L511.657 247.5H487.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 18_12" d="M511.728 247.5L516.343 235.5H540.272L535.657 247.5H511.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 21_12" d="M583.728 247.5L588.343 235.5H612.272L607.657 247.5H583.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 22_12" d="M607.728 247.5L612.343 235.5H636.272L631.657 247.5H607.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 23_12" d="M631.728 247.5L636.343 235.5H660.272L655.657 247.5H631.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 24_12" d="M655.728 247.5L660.343 235.5H684.272L679.657 247.5H655.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 25_12" d="M679.728 247.5L684.343 235.5H708.272L703.657 247.5H679.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 26_12" d="M703.728 247.5L708.343 235.5H732.272L727.657 247.5H703.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 27_12" d="M727.728 247.5L732.343 235.5H756.272L751.657 247.5H727.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 28_12" d="M751.728 247.5L756.343 235.5H780.272L775.657 247.5H751.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 29_12" d="M775.728 247.5L780.343 235.5H804.272L799.657 247.5H775.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 30_12" d="M799.728 247.5L804.343 235.5H828.272L823.657 247.5H799.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 31_12" d="M823.728 247.5L828.343 235.5H852.272L847.657 247.5H823.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 32_12" d="M847.728 247.5L852.343 235.5H876.272L871.657 247.5H847.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 33_12" d="M871.728 247.5L876.343 235.5H900.272L895.657 247.5H871.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 34_12" d="M895.728 247.5L900.343 235.5H924.272L919.657 247.5H895.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 35_12" d="M919.728 247.5L924.343 235.5H948.272L943.657 247.5H919.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 36_12" d="M943.728 247.5L948.343 235.5H972.272L967.657 247.5H943.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 37_12" d="M967.728 247.5L972.343 235.5H996.272L991.657 247.5H967.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 38_12" d="M991.728 247.5L996.343 235.5H1020.5V247.5H991.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 19_12" d="M535.728 247.5L540.343 235.5H564.272L559.657 247.5H535.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 20_12" d="M559.728 247.5L564.343 235.5H588.272L583.657 247.5H559.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Everton" d="M48.3657 242.509H45.1538V244.915H48.9082V246H43.7949V238.18H48.8706V239.275H45.1538V241.435H48.3657V242.509ZM52.4029 244.346L53.6328 240.188H54.981L52.9668 246H51.8335L49.8032 240.188H51.1568L52.4029 244.346ZM58.8892 246.107C58.0621 246.107 57.3907 245.848 56.875 245.329C56.363 244.806 56.107 244.111 56.107 243.245V243.083C56.107 242.503 56.218 241.986 56.44 241.531C56.6656 241.073 56.9807 240.717 57.3853 240.462C57.7899 240.208 58.2411 240.081 58.7388 240.081C59.5301 240.081 60.1407 240.333 60.5704 240.838C61.0036 241.343 61.2203 242.058 61.2203 242.981V243.508H57.4229C57.4623 243.988 57.6216 244.367 57.9009 244.646C58.1838 244.926 58.5383 245.065 58.9644 245.065C59.5624 245.065 60.0494 244.824 60.4253 244.34L61.1289 245.012C60.8962 245.359 60.5847 245.629 60.1944 245.823C59.8077 246.013 59.3726 246.107 58.8892 246.107ZM58.7334 241.128C58.3754 241.128 58.0853 241.254 57.8633 241.504C57.6449 241.755 57.5052 242.104 57.4444 242.552H59.9312V242.455C59.9025 242.018 59.7862 241.689 59.5821 241.467C59.378 241.241 59.0951 241.128 58.7334 241.128ZM65.8858 241.381C65.7139 241.352 65.5367 241.338 65.3541 241.338C64.7561 241.338 64.3532 241.567 64.1456 242.025V246H62.8404V240.188H64.0865L64.1187 240.838C64.4338 240.333 64.8707 240.081 65.4293 240.081C65.6155 240.081 65.7694 240.106 65.8912 240.156L65.8858 241.381ZM69.2193 238.776V240.188H70.2452V241.155H69.2193V244.399C69.2193 244.621 69.2623 244.783 69.3482 244.883C69.4377 244.979 69.5953 245.028 69.8209 245.028C69.9713 245.028 70.1235 245.01 70.2774 244.974V245.984C69.9802 246.066 69.6938 246.107 69.418 246.107C68.4154 246.107 67.9141 245.554 67.9141 244.448V241.155H66.9581V240.188H67.9141V238.776H69.2193ZM71.4464 243.041C71.4464 242.471 71.5592 241.959 71.7848 241.504C72.0104 241.046 72.3272 240.695 72.7354 240.452C73.1437 240.205 73.6127 240.081 74.1427 240.081C74.9269 240.081 75.5624 240.333 76.0494 240.838C76.54 241.343 76.8049 242.013 76.8443 242.847L76.8497 243.153C76.8497 243.726 76.7387 244.238 76.5167 244.689C76.2983 245.141 75.9832 245.49 75.5714 245.737C75.1632 245.984 74.6905 246.107 74.1534 246.107C73.3334 246.107 72.6764 245.835 72.1822 245.291C71.6917 244.743 71.4464 244.014 71.4464 243.105V243.041ZM72.7516 243.153C72.7516 243.751 72.8751 244.22 73.1222 244.561C73.3692 244.897 73.713 245.065 74.1534 245.065C74.5938 245.065 74.9358 244.894 75.1793 244.55C75.4264 244.206 75.5499 243.703 75.5499 243.041C75.5499 242.453 75.4228 241.988 75.1686 241.644C74.9179 241.3 74.5759 241.128 74.1427 241.128C73.7166 241.128 73.3782 241.299 73.1275 241.639C72.8769 241.975 72.7516 242.48 72.7516 243.153ZM79.7696 240.188L79.8072 240.86C80.2369 240.341 80.8009 240.081 81.4991 240.081C82.7094 240.081 83.3253 240.774 83.3468 242.16V246H82.0416V242.235C82.0416 241.866 81.9611 241.594 81.7999 241.418C81.6424 241.239 81.3828 241.15 81.0211 241.15C80.4947 241.15 80.1027 241.388 79.8448 241.864V246H78.5397V240.188H79.7696Z" fill="white"/>
              </g>
              <g id="Group 13">
              <path id="Rectangle 1_13" d="M103.728 264.5L108.343 252.5H132.272L127.657 264.5H103.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 39_13" d="M36.5196 264.5L36.9811 252.5H108.272L103.657 264.5H36.5196Z" fill="#2F2E2E" stroke="black"/>
              <path id="Rectangle 2_13" d="M127.728 264.5L132.343 252.5H156.272L151.657 264.5H127.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 3_13" d="M151.728 264.5L156.343 252.5H180.272L175.657 264.5H151.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 4_13" d="M175.728 264.5L180.343 252.5H204.272L199.657 264.5H175.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 5_13" d="M199.728 264.5L204.343 252.5H228.272L223.657 264.5H199.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 6_13" d="M223.728 264.5L228.343 252.5H252.272L247.657 264.5H223.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 7_13" d="M247.728 264.5L252.343 252.5H276.272L271.657 264.5H247.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 8_13" d="M271.728 264.5L276.343 252.5H300.272L295.657 264.5H271.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 9_13" d="M295.728 264.5L300.343 252.5H324.272L319.657 264.5H295.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 10_13" d="M319.728 264.5L324.343 252.5H348.272L343.657 264.5H319.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 11_13" d="M343.728 264.5L348.343 252.5H372.272L367.657 264.5H343.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 12_13" d="M367.728 264.5L372.343 252.5H396.272L391.657 264.5H367.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 13_13" d="M391.728 264.5L396.343 252.5H420.272L415.657 264.5H391.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 14_13" d="M415.728 264.5L420.343 252.5H444.272L439.657 264.5H415.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 15_13" d="M439.728 264.5L444.343 252.5H468.272L463.657 264.5H439.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 16_13" d="M463.728 264.5L468.343 252.5H492.272L487.657 264.5H463.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 17_13" d="M487.728 264.5L492.343 252.5H516.272L511.657 264.5H487.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 18_13" d="M511.728 264.5L516.343 252.5H540.272L535.657 264.5H511.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 21_13" d="M583.728 264.5L588.343 252.5H612.272L607.657 264.5H583.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 22_13" d="M607.728 264.5L612.343 252.5H636.272L631.657 264.5H607.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 23_13" d="M631.728 264.5L636.343 252.5H660.272L655.657 264.5H631.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 24_13" d="M655.728 264.5L660.343 252.5H684.272L679.657 264.5H655.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 25_13" d="M679.728 264.5L684.343 252.5H708.272L703.657 264.5H679.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 26_13" d="M703.728 264.5L708.343 252.5H732.272L727.657 264.5H703.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 27_13" d="M727.728 264.5L732.343 252.5H756.272L751.657 264.5H727.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 28_13" d="M751.728 264.5L756.343 252.5H780.272L775.657 264.5H751.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 29_13" d="M775.728 264.5L780.343 252.5H804.272L799.657 264.5H775.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 30_13" d="M799.728 264.5L804.343 252.5H828.272L823.657 264.5H799.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 31_13" d="M823.728 264.5L828.343 252.5H852.272L847.657 264.5H823.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 32_13" d="M847.728 264.5L852.343 252.5H876.272L871.657 264.5H847.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 33_13" d="M871.728 264.5L876.343 252.5H900.272L895.657 264.5H871.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 34_13" d="M895.728 264.5L900.343 252.5H924.272L919.657 264.5H895.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 35_13" d="M919.728 264.5L924.343 252.5H948.272L943.657 264.5H919.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 36_13" d="M943.728 264.5L948.343 252.5H972.272L967.657 264.5H943.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 37_13" d="M967.728 264.5L972.343 252.5H996.272L991.657 264.5H967.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 38_13" d="M991.728 264.5L996.343 252.5H1020.5V264.5H991.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 19_13" d="M535.728 264.5L540.343 252.5H564.272L559.657 264.5H535.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 20_13" d="M559.728 264.5L564.343 252.5H588.272L583.657 264.5H559.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="N.Castle" d="M49.9985 263H48.6396L45.1538 257.452V263H43.7949V255.18H45.1538L48.6504 260.75V255.18H49.9985V263ZM52.897 261.625C53.1405 261.625 53.3285 261.695 53.461 261.834C53.5934 261.971 53.6597 262.142 53.6597 262.35C53.6597 262.554 53.5934 262.724 53.461 262.86C53.3285 262.993 53.1405 263.059 52.897 263.059C52.6642 263.059 52.4798 262.993 52.3438 262.86C52.2077 262.728 52.1397 262.558 52.1397 262.35C52.1397 262.142 52.2059 261.971 52.3384 261.834C52.4709 261.695 52.6571 261.625 52.897 261.625ZM61.854 260.454C61.7753 261.288 61.4673 261.94 60.9302 262.409C60.3931 262.875 59.6788 263.107 58.7871 263.107C58.1641 263.107 57.6145 262.961 57.1382 262.667C56.6656 262.37 56.3003 261.949 56.0425 261.405C55.7847 260.861 55.6504 260.229 55.6397 259.509V258.778C55.6397 258.041 55.7704 257.391 56.0318 256.829C56.2932 256.266 56.6674 255.833 57.1543 255.529C57.6449 255.224 58.2107 255.072 58.8516 255.072C59.7146 255.072 60.4092 255.307 60.9356 255.776C61.462 256.245 61.7681 256.907 61.854 257.763H60.5005C60.4361 257.201 60.2714 256.796 60.0064 256.549C59.745 256.299 59.3601 256.173 58.8516 256.173C58.2608 256.173 57.806 256.39 57.4873 256.823C57.1722 257.253 57.0111 257.885 57.0039 258.719V259.412C57.0039 260.257 57.1543 260.902 57.4551 261.346C57.7595 261.79 58.2035 262.012 58.7871 262.012C59.3207 262.012 59.7217 261.892 59.9903 261.652C60.2588 261.412 60.4289 261.013 60.5005 260.454H61.854ZM67.0245 263C66.9672 262.889 66.9171 262.708 66.8741 262.458C66.4587 262.891 65.9503 263.107 65.3487 263.107C64.765 263.107 64.2888 262.941 63.92 262.608C63.5512 262.275 63.3668 261.863 63.3668 261.373C63.3668 260.753 63.5959 260.279 64.0543 259.949C64.5162 259.616 65.175 259.45 66.0308 259.45H66.8311V259.068C66.8311 258.768 66.747 258.528 66.5787 258.349C66.4104 258.166 66.1544 258.075 65.8106 258.075C65.5134 258.075 65.2699 258.15 65.0801 258.3C64.8904 258.447 64.7955 258.635 64.7955 258.864H63.4903C63.4903 258.546 63.5959 258.248 63.8072 257.973C64.0185 257.693 64.3049 257.475 64.6666 257.317C65.0318 257.16 65.4382 257.081 65.8858 257.081C66.5661 257.081 67.1086 257.253 67.5132 257.597C67.9179 257.937 68.1255 258.417 68.1363 259.036V261.657C68.1363 262.18 68.2097 262.597 68.3565 262.909V263H67.0245ZM65.5904 262.06C65.8482 262.06 66.0899 261.997 66.3155 261.872C66.5447 261.747 66.7165 261.578 66.8311 261.367V260.271H66.1275C65.6441 260.271 65.2807 260.356 65.0372 260.524C64.7937 260.692 64.6719 260.93 64.6719 261.238C64.6719 261.489 64.7543 261.689 64.919 261.84C65.0873 261.987 65.3111 262.06 65.5904 262.06ZM73.3658 261.421C73.3658 261.188 73.2691 261.011 73.0758 260.889C72.886 260.767 72.5691 260.66 72.1251 260.567C71.6811 260.474 71.3105 260.356 71.0133 260.212C70.3616 259.897 70.0357 259.441 70.0357 258.843C70.0357 258.341 70.247 257.923 70.6695 257.586C71.092 257.249 71.6291 257.081 72.2808 257.081C72.9755 257.081 73.5359 257.253 73.962 257.597C74.3917 257.94 74.6065 258.386 74.6065 258.934H73.3013C73.3013 258.683 73.2082 258.476 73.0221 258.311C72.8359 258.143 72.5888 258.059 72.2808 258.059C71.9944 258.059 71.7598 258.125 71.5772 258.257C71.3982 258.39 71.3087 258.567 71.3087 258.789C71.3087 258.99 71.3928 259.145 71.5611 259.256C71.7294 259.367 72.0696 259.48 72.5816 259.595C73.0937 259.706 73.4947 259.84 73.7847 259.998C74.0784 260.152 74.295 260.338 74.4346 260.556C74.5779 260.775 74.6495 261.04 74.6495 261.351C74.6495 261.874 74.4329 262.298 73.9996 262.624C73.5663 262.946 72.9988 263.107 72.297 263.107C71.8207 263.107 71.3964 263.021 71.024 262.85C70.6516 262.678 70.3616 262.441 70.1539 262.141C69.9462 261.84 69.8424 261.516 69.8424 261.168H71.1099C71.1278 261.476 71.2442 261.715 71.4591 261.883C71.6739 262.048 71.9586 262.13 72.3131 262.13C72.6568 262.13 72.9182 262.065 73.0972 261.937C73.2763 261.804 73.3658 261.632 73.3658 261.421ZM78.0313 255.776V257.188H79.0572V258.155H78.0313V261.399C78.0313 261.621 78.0743 261.783 78.1603 261.883C78.2498 261.979 78.4073 262.028 78.6329 262.028C78.7833 262.028 78.9355 262.01 79.0895 261.974V262.984C78.7923 263.066 78.5058 263.107 78.2301 263.107C77.2275 263.107 76.7262 262.554 76.7262 261.448V258.155H75.7701V257.188H76.7262V255.776H78.0313ZM82.0524 263H80.7472V254.75H82.0524V263ZM86.6427 263.107C85.8156 263.107 85.1442 262.848 84.6286 262.329C84.1165 261.806 83.8605 261.111 83.8605 260.245V260.083C83.8605 259.503 83.9715 258.986 84.1935 258.531C84.4191 258.073 84.7342 257.717 85.1388 257.462C85.5434 257.208 85.9946 257.081 86.4923 257.081C87.2837 257.081 87.8942 257.333 88.3239 257.838C88.7571 258.343 88.9738 259.058 88.9738 259.981V260.508H85.1764C85.2158 260.988 85.3751 261.367 85.6544 261.646C85.9373 261.926 86.2918 262.065 86.7179 262.065C87.3159 262.065 87.8029 261.824 88.1788 261.34L88.8825 262.012C88.6497 262.359 88.3382 262.629 87.9479 262.823C87.5612 263.013 87.1261 263.107 86.6427 263.107ZM86.487 258.128C86.1289 258.128 85.8388 258.254 85.6168 258.504C85.3984 258.755 85.2588 259.104 85.1979 259.552H87.6847V259.455C87.6561 259.018 87.5397 258.689 87.3356 258.467C87.1315 258.241 86.8486 258.128 86.487 258.128Z" fill="white"/>
              </g>
              <g id="Group 14">
              <path id="Rectangle 1_14" d="M102.728 282.5L107.343 270.5H131.272L126.657 282.5H102.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 39_14" d="M35.5196 282.5L35.9811 270.5H107.272L102.657 282.5H35.5196Z" fill="#2F2E2E" stroke="black"/>
              <path id="Rectangle 2_14" d="M126.728 282.5L131.343 270.5H155.272L150.657 282.5H126.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 3_14" d="M150.728 282.5L155.343 270.5H179.272L174.657 282.5H150.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 4_14" d="M174.728 282.5L179.343 270.5H203.272L198.657 282.5H174.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 5_14" d="M198.728 282.5L203.343 270.5H227.272L222.657 282.5H198.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 6_14" d="M222.728 282.5L227.343 270.5H251.272L246.657 282.5H222.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 7_14" d="M246.728 282.5L251.343 270.5H275.272L270.657 282.5H246.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 8_14" d="M270.728 282.5L275.343 270.5H299.272L294.657 282.5H270.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 9_14" d="M294.728 282.5L299.343 270.5H323.272L318.657 282.5H294.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 10_14" d="M318.728 282.5L323.343 270.5H347.272L342.657 282.5H318.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 11_14" d="M342.728 282.5L347.343 270.5H371.272L366.657 282.5H342.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 12_14" d="M366.728 282.5L371.343 270.5H395.272L390.657 282.5H366.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 13_14" d="M390.728 282.5L395.343 270.5H419.272L414.657 282.5H390.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 14_14" d="M414.728 282.5L419.343 270.5H443.272L438.657 282.5H414.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 15_14" d="M438.728 282.5L443.343 270.5H467.272L462.657 282.5H438.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 16_14" d="M462.728 282.5L467.343 270.5H491.272L486.657 282.5H462.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 17_14" d="M486.728 282.5L491.343 270.5H515.272L510.657 282.5H486.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 18_14" d="M510.728 282.5L515.343 270.5H539.272L534.657 282.5H510.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 21_14" d="M582.728 282.5L587.343 270.5H611.272L606.657 282.5H582.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 22_14" d="M606.728 282.5L611.343 270.5H635.272L630.657 282.5H606.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 23_14" d="M630.728 282.5L635.343 270.5H659.272L654.657 282.5H630.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 24_14" d="M654.728 282.5L659.343 270.5H683.272L678.657 282.5H654.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 25_14" d="M678.728 282.5L683.343 270.5H707.272L702.657 282.5H678.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 26_14" d="M702.728 282.5L707.343 270.5H731.272L726.657 282.5H702.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 27_14" d="M726.728 282.5L731.343 270.5H755.272L750.657 282.5H726.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 28_14" d="M750.728 282.5L755.343 270.5H779.272L774.657 282.5H750.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 29_14" d="M774.728 282.5L779.343 270.5H803.272L798.657 282.5H774.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 30_14" d="M798.728 282.5L803.343 270.5H827.272L822.657 282.5H798.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 31_14" d="M822.728 282.5L827.343 270.5H851.272L846.657 282.5H822.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 32_14" d="M846.728 282.5L851.343 270.5H875.272L870.657 282.5H846.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 33_14" d="M870.728 282.5L875.343 270.5H899.272L894.657 282.5H870.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 34_14" d="M894.728 282.5L899.343 270.5H923.272L918.657 282.5H894.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 35_14" d="M918.728 282.5L923.343 270.5H947.272L942.657 282.5H918.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 36_14" d="M942.728 282.5L947.343 270.5H971.272L966.657 282.5H942.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 37_14" d="M966.728 282.5L971.343 270.5H995.272L990.657 282.5H966.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 38_14" d="M990.728 282.5L995.343 270.5H1019.5V282.5H990.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 19_14" d="M534.728 282.5L539.343 270.5H563.272L558.657 282.5H534.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 20_14" d="M558.728 282.5L563.343 270.5H587.272L582.657 282.5H558.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Southamp" d="M47.8823 278.986C47.8823 278.642 47.7606 278.377 47.5171 278.191C47.2772 278.005 46.8421 277.817 46.2119 277.627C45.5817 277.437 45.0804 277.226 44.708 276.993C43.9954 276.546 43.6392 275.962 43.6392 275.242C43.6392 274.612 43.8952 274.093 44.4072 273.685C44.9229 273.276 45.5907 273.072 46.4106 273.072C46.9549 273.072 47.4401 273.173 47.8662 273.373C48.2923 273.574 48.6271 273.86 48.8706 274.232C49.1141 274.601 49.2358 275.011 49.2358 275.462H47.8823C47.8823 275.054 47.7534 274.736 47.4956 274.506C47.2414 274.274 46.8761 274.157 46.3999 274.157C45.9559 274.157 45.6104 274.252 45.3633 274.442C45.1198 274.632 44.998 274.897 44.998 275.237C44.998 275.523 45.1305 275.763 45.3955 275.957C45.6605 276.146 46.0973 276.333 46.7061 276.515C47.3148 276.694 47.8035 276.9 48.1724 277.133C48.5412 277.362 48.8115 277.627 48.9834 277.928C49.1553 278.225 49.2412 278.574 49.2412 278.975C49.2412 279.627 48.9906 280.146 48.4893 280.533C47.9915 280.916 47.3148 281.107 46.459 281.107C45.8932 281.107 45.3722 281.004 44.896 280.796C44.4233 280.585 44.0545 280.295 43.7896 279.926C43.5282 279.557 43.3975 279.127 43.3975 278.637H44.7563C44.7563 279.081 44.9032 279.424 45.1968 279.668C45.4904 279.911 45.9111 280.033 46.459 280.033C46.9316 280.033 47.2861 279.938 47.5225 279.749C47.7624 279.555 47.8823 279.301 47.8823 278.986ZM50.668 278.041C50.668 277.471 50.7808 276.959 51.0064 276.504C51.232 276.046 51.5488 275.695 51.9571 275.452C52.3653 275.205 52.8343 275.081 53.3643 275.081C54.1485 275.081 54.784 275.333 55.271 275.838C55.7616 276.343 56.0265 277.013 56.0659 277.847L56.0713 278.153C56.0713 278.726 55.9603 279.238 55.7383 279.689C55.5199 280.141 55.2048 280.49 54.793 280.737C54.3848 280.984 53.9121 281.107 53.375 281.107C52.555 281.107 51.898 280.835 51.4038 280.291C50.9133 279.743 50.668 279.014 50.668 278.105V278.041ZM51.9732 278.153C51.9732 278.751 52.0967 279.22 52.3438 279.561C52.5908 279.897 52.9346 280.065 53.375 280.065C53.8154 280.065 54.1574 279.894 54.4009 279.55C54.648 279.206 54.7715 278.703 54.7715 278.041C54.7715 277.453 54.6444 276.988 54.3902 276.644C54.1395 276.3 53.7975 276.128 53.3643 276.128C52.9382 276.128 52.5998 276.299 52.3491 276.639C52.0985 276.975 51.9732 277.48 51.9732 278.153ZM61.3008 280.431C60.9177 280.882 60.3734 281.107 59.668 281.107C59.0378 281.107 58.5598 280.923 58.2339 280.554C57.9117 280.185 57.7505 279.652 57.7505 278.954V275.188H59.0557V278.938C59.0557 279.675 59.3619 280.044 59.9742 280.044C60.6079 280.044 61.0358 279.817 61.2579 279.362V275.188H62.563V281H61.333L61.3008 280.431ZM66.1329 273.776V275.188H67.1588V276.155H66.1329V279.399C66.1329 279.621 66.1758 279.783 66.2618 279.883C66.3513 279.979 66.5088 280.028 66.7344 280.028C66.8848 280.028 67.037 280.01 67.191 279.974V280.984C66.8938 281.066 66.6073 281.107 66.3316 281.107C65.329 281.107 64.8277 280.554 64.8277 279.448V276.155H63.8716V275.188H64.8277V273.776H66.1329ZM70.0518 275.822C70.4779 275.328 71.0168 275.081 71.6685 275.081C72.9075 275.081 73.5359 275.788 73.5538 277.203V281H72.2486V277.251C72.2486 276.85 72.1609 276.567 71.9854 276.402C71.8136 276.234 71.5593 276.15 71.2227 276.15C70.6999 276.15 70.3096 276.383 70.0518 276.848V281H68.7467V272.75H70.0518V275.822ZM78.9552 281C78.8979 280.889 78.8478 280.708 78.8048 280.458C78.3894 280.891 77.881 281.107 77.2794 281.107C76.6957 281.107 76.2195 280.941 75.8507 280.608C75.4819 280.275 75.2975 279.863 75.2975 279.373C75.2975 278.753 75.5266 278.279 75.985 277.949C76.4469 277.616 77.1057 277.45 77.9615 277.45H78.7618V277.068C78.7618 276.768 78.6777 276.528 78.5094 276.349C78.3411 276.166 78.0851 276.075 77.7413 276.075C77.4441 276.075 77.2006 276.15 77.0108 276.3C76.8211 276.447 76.7262 276.635 76.7262 276.864H75.421C75.421 276.546 75.5266 276.248 75.7379 275.973C75.9492 275.693 76.2356 275.475 76.5973 275.317C76.9625 275.16 77.3689 275.081 77.8165 275.081C78.4968 275.081 79.0393 275.253 79.4439 275.597C79.8486 275.937 80.0562 276.417 80.067 277.036V279.657C80.067 280.18 80.1404 280.597 80.2872 280.909V281H78.9552ZM77.5211 280.06C77.7789 280.06 78.0206 279.997 78.2462 279.872C78.4754 279.747 78.6472 279.578 78.7618 279.367V278.271H78.0582C77.5748 278.271 77.2114 278.356 76.9679 278.524C76.7244 278.692 76.6026 278.93 76.6026 279.238C76.6026 279.489 76.685 279.689 76.8497 279.84C77.018 279.987 77.2418 280.06 77.5211 280.06ZM83.2662 275.188L83.3038 275.795C83.712 275.319 84.2706 275.081 84.9796 275.081C85.7566 275.081 86.2884 275.378 86.5748 275.973C86.9974 275.378 87.5918 275.081 88.358 275.081C88.999 275.081 89.4752 275.258 89.7867 275.613C90.1018 275.967 90.263 276.49 90.2701 277.181V281H88.965V277.219C88.965 276.85 88.8844 276.58 88.7233 276.408C88.5621 276.236 88.2954 276.15 87.923 276.15C87.6258 276.15 87.3823 276.23 87.1925 276.392C87.0063 276.549 86.8756 276.757 86.8004 277.015L86.8058 281H85.5006V277.176C85.4827 276.492 85.1336 276.15 84.4532 276.15C83.9305 276.15 83.5599 276.363 83.3414 276.789V281H82.0363V275.188H83.2662ZM97.3043 278.153C97.3043 279.052 97.1002 279.77 96.692 280.307C96.2838 280.841 95.736 281.107 95.0485 281.107C94.4111 281.107 93.9009 280.898 93.5177 280.479V283.234H92.2125V275.188H93.4157L93.4694 275.779C93.8525 275.314 94.3735 275.081 95.0324 275.081C95.7413 275.081 96.2964 275.346 96.6974 275.876C97.102 276.402 97.3043 277.135 97.3043 278.073V278.153ZM96.0045 278.041C96.0045 277.46 95.8882 277 95.6554 276.66C95.4262 276.32 95.0968 276.15 94.6671 276.15C94.1336 276.15 93.7505 276.37 93.5177 276.811V279.389C93.754 279.84 94.1408 280.065 94.6779 280.065C95.0932 280.065 95.4173 279.899 95.65 279.566C95.8864 279.229 96.0045 278.721 96.0045 278.041Z" fill="white"/>
              </g>
              <g id="Group 15">
              <path id="Rectangle 1_15" d="M103.728 300.5L108.343 288.5H132.272L127.657 300.5H103.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 39_15" d="M36.5196 300.5L36.9811 288.5H108.272L103.657 300.5H36.5196Z" fill="#2F2E2E" stroke="black"/>
              <path id="Rectangle 2_15" d="M127.728 300.5L132.343 288.5H156.272L151.657 300.5H127.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 3_15" d="M151.728 300.5L156.343 288.5H180.272L175.657 300.5H151.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 4_15" d="M175.728 300.5L180.343 288.5H204.272L199.657 300.5H175.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 5_15" d="M199.728 300.5L204.343 288.5H228.272L223.657 300.5H199.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 6_15" d="M223.728 300.5L228.343 288.5H252.272L247.657 300.5H223.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 7_15" d="M247.728 300.5L252.343 288.5H276.272L271.657 300.5H247.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 8_15" d="M271.728 300.5L276.343 288.5H300.272L295.657 300.5H271.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 9_15" d="M295.728 300.5L300.343 288.5H324.272L319.657 300.5H295.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 10_15" d="M319.728 300.5L324.343 288.5H348.272L343.657 300.5H319.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 11_15" d="M343.728 300.5L348.343 288.5H372.272L367.657 300.5H343.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 12_15" d="M367.728 300.5L372.343 288.5H396.272L391.657 300.5H367.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 13_15" d="M391.728 300.5L396.343 288.5H420.272L415.657 300.5H391.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 14_15" d="M415.728 300.5L420.343 288.5H444.272L439.657 300.5H415.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 15_15" d="M439.728 300.5L444.343 288.5H468.272L463.657 300.5H439.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 16_15" d="M463.728 300.5L468.343 288.5H492.272L487.657 300.5H463.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 17_15" d="M487.728 300.5L492.343 288.5H516.272L511.657 300.5H487.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 18_15" d="M511.728 300.5L516.343 288.5H540.272L535.657 300.5H511.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 21_15" d="M583.728 300.5L588.343 288.5H612.272L607.657 300.5H583.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 22_15" d="M607.728 300.5L612.343 288.5H636.272L631.657 300.5H607.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 23_15" d="M631.728 300.5L636.343 288.5H660.272L655.657 300.5H631.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 24_15" d="M655.728 300.5L660.343 288.5H684.272L679.657 300.5H655.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 25_15" d="M679.728 300.5L684.343 288.5H708.272L703.657 300.5H679.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 26_15" d="M703.728 300.5L708.343 288.5H732.272L727.657 300.5H703.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 27_15" d="M727.728 300.5L732.343 288.5H756.272L751.657 300.5H727.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 28_15" d="M751.728 300.5L756.343 288.5H780.272L775.657 300.5H751.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 29_15" d="M775.728 300.5L780.343 288.5H804.272L799.657 300.5H775.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 30_15" d="M799.728 300.5L804.343 288.5H828.272L823.657 300.5H799.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 31_15" d="M823.728 300.5L828.343 288.5H852.272L847.657 300.5H823.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 32_15" d="M847.728 300.5L852.343 288.5H876.272L871.657 300.5H847.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 33_15" d="M871.728 300.5L876.343 288.5H900.272L895.657 300.5H871.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 34_15" d="M895.728 300.5L900.343 288.5H924.272L919.657 300.5H895.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 35_15" d="M919.728 300.5L924.343 288.5H948.272L943.657 300.5H919.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 36_15" d="M943.728 300.5L948.343 288.5H972.272L967.657 300.5H943.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 37_15" d="M967.728 300.5L972.343 288.5H996.272L991.657 300.5H967.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 38_15" d="M991.728 300.5L996.343 288.5H1020.5V300.5H991.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 19_15" d="M535.728 300.5L540.343 288.5H564.272L559.657 300.5H535.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 20_15" d="M559.728 300.5L564.343 288.5H588.272L583.657 300.5H559.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Brighton" d="M43.7949 299V291.18H46.4751C47.3595 291.18 48.0327 291.357 48.4946 291.711C48.9565 292.066 49.1875 292.594 49.1875 293.296C49.1875 293.654 49.0908 293.976 48.8975 294.263C48.7041 294.549 48.4212 294.771 48.0488 294.929C48.4714 295.043 48.7972 295.26 49.0264 295.579C49.2591 295.894 49.3755 296.273 49.3755 296.717C49.3755 297.451 49.1392 298.015 48.6665 298.409C48.1974 298.803 47.5243 299 46.647 299H43.7949ZM45.1538 295.471V297.915H46.6631C47.0892 297.915 47.4222 297.809 47.6621 297.598C47.902 297.387 48.022 297.093 48.022 296.717C48.022 295.904 47.6066 295.489 46.7759 295.471H45.1538ZM45.1538 294.472H46.4858C46.9084 294.472 47.2378 294.377 47.4741 294.188C47.714 293.994 47.834 293.722 47.834 293.371C47.834 292.984 47.723 292.705 47.501 292.533C47.2826 292.361 46.9406 292.275 46.4751 292.275H45.1538V294.472ZM54.2559 294.381C54.084 294.352 53.9068 294.338 53.7241 294.338C53.1262 294.338 52.7233 294.567 52.5156 295.025V299H51.2105V293.188H52.4566L52.4888 293.838C52.8039 293.333 53.2407 293.081 53.7993 293.081C53.9855 293.081 54.1395 293.106 54.2613 293.156L54.2559 294.381ZM57.0738 299H55.7686V293.188H57.0738V299ZM55.688 291.679C55.688 291.479 55.7507 291.312 55.876 291.18C56.0049 291.047 56.1875 290.981 56.4239 290.981C56.6602 290.981 56.8428 291.047 56.9717 291.18C57.1006 291.312 57.1651 291.479 57.1651 291.679C57.1651 291.876 57.1006 292.041 56.9717 292.173C56.8428 292.302 56.6602 292.367 56.4239 292.367C56.1875 292.367 56.0049 292.302 55.876 292.173C55.7507 292.041 55.688 291.876 55.688 291.679ZM58.8765 296.051C58.8765 295.149 59.0878 294.429 59.5103 293.892C59.9364 293.351 60.5004 293.081 61.2022 293.081C61.8646 293.081 62.3856 293.312 62.7652 293.774L62.8243 293.188H64.0005V298.823C64.0005 299.585 63.7624 300.187 63.2862 300.627C62.8135 301.068 62.1744 301.288 61.3687 301.288C60.9426 301.288 60.5254 301.199 60.1172 301.02C59.7126 300.844 59.4047 300.613 59.1934 300.327L59.8111 299.542C60.2121 300.019 60.7063 300.257 61.2935 300.257C61.7268 300.257 62.0687 300.139 62.3194 299.902C62.57 299.67 62.6954 299.326 62.6954 298.871V298.479C62.3194 298.898 61.8181 299.107 61.1915 299.107C60.5111 299.107 59.9543 298.837 59.5211 298.296C59.0914 297.756 58.8765 297.007 58.8765 296.051ZM60.1763 296.164C60.1763 296.748 60.2945 297.208 60.5308 297.544C60.7707 297.877 61.1019 298.044 61.5245 298.044C62.0508 298.044 62.4411 297.818 62.6954 297.367V294.811C62.4483 294.37 62.0616 294.15 61.5352 294.15C61.1055 294.15 60.7707 294.32 60.5308 294.66C60.2945 295 60.1763 295.502 60.1763 296.164ZM67.2374 293.822C67.6635 293.328 68.2024 293.081 68.8541 293.081C70.093 293.081 70.7214 293.788 70.7393 295.203V299H69.4342V295.251C69.4342 294.85 69.3464 294.567 69.171 294.402C68.9991 294.234 68.7449 294.15 68.4083 294.15C67.8855 294.15 67.4952 294.383 67.2374 294.848V299H65.9322V290.75H67.2374V293.822ZM74.3038 291.776V293.188H75.3297V294.155H74.3038V297.399C74.3038 297.621 74.3468 297.783 74.4327 297.883C74.5222 297.979 74.6798 298.028 74.9054 298.028C75.0558 298.028 75.2079 298.01 75.3619 297.974V298.984C75.0647 299.066 74.7783 299.107 74.5025 299.107C73.4999 299.107 72.9986 298.554 72.9986 297.448V294.155H72.0426V293.188H72.9986V291.776H74.3038ZM76.5309 296.041C76.5309 295.471 76.6437 294.959 76.8693 294.504C77.0948 294.046 77.4117 293.695 77.8199 293.452C78.2281 293.205 78.6972 293.081 79.2272 293.081C80.0113 293.081 80.6469 293.333 81.1339 293.838C81.6245 294.343 81.8894 295.013 81.9288 295.847L81.9342 296.153C81.9342 296.726 81.8232 297.238 81.6012 297.689C81.3828 298.141 81.0677 298.49 80.6559 298.737C80.2477 298.984 79.775 299.107 79.2379 299.107C78.4179 299.107 77.7609 298.835 77.2667 298.291C76.7762 297.743 76.5309 297.014 76.5309 296.105V296.041ZM77.8361 296.153C77.8361 296.751 77.9596 297.22 78.2067 297.561C78.4537 297.897 78.7975 298.065 79.2379 298.065C79.6783 298.065 80.0203 297.894 80.2638 297.55C80.5109 297.206 80.6344 296.703 80.6344 296.041C80.6344 295.453 80.5073 294.988 80.253 294.644C80.0024 294.3 79.6604 294.128 79.2272 294.128C78.8011 294.128 78.4627 294.299 78.212 294.639C77.9614 294.975 77.8361 295.48 77.8361 296.153ZM84.8541 293.188L84.8917 293.86C85.3214 293.341 85.8854 293.081 86.5836 293.081C87.7939 293.081 88.4098 293.774 88.4313 295.16V299H87.1261V295.235C87.1261 294.866 87.0455 294.594 86.8844 294.418C86.7269 294.239 86.4673 294.15 86.1056 294.15C85.5792 294.15 85.1871 294.388 84.9293 294.864V299H83.6242V293.188H84.8541Z" fill="white"/>
              </g>
              <g id="Group 16">
              <path id="Rectangle 1_16" d="M103.728 318.5L108.343 306.5H132.272L127.657 318.5H103.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 39_16" d="M36.5196 318.5L36.9811 306.5H108.272L103.657 318.5H36.5196Z" fill="#2F2E2E" stroke="black"/>
              <path id="Rectangle 2_16" d="M127.728 318.5L132.343 306.5H156.272L151.657 318.5H127.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 3_16" d="M151.728 318.5L156.343 306.5H180.272L175.657 318.5H151.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 4_16" d="M175.728 318.5L180.343 306.5H204.272L199.657 318.5H175.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 5_16" d="M199.728 318.5L204.343 306.5H228.272L223.657 318.5H199.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 6_16" d="M223.728 318.5L228.343 306.5H252.272L247.657 318.5H223.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 7_16" d="M247.728 318.5L252.343 306.5H276.272L271.657 318.5H247.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 8_16" d="M271.728 318.5L276.343 306.5H300.272L295.657 318.5H271.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 9_16" d="M295.728 318.5L300.343 306.5H324.272L319.657 318.5H295.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 10_16" d="M319.728 318.5L324.343 306.5H348.272L343.657 318.5H319.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 11_16" d="M343.728 318.5L348.343 306.5H372.272L367.657 318.5H343.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 12_16" d="M367.728 318.5L372.343 306.5H396.272L391.657 318.5H367.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 13_16" d="M391.728 318.5L396.343 306.5H420.272L415.657 318.5H391.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 14_16" d="M415.728 318.5L420.343 306.5H444.272L439.657 318.5H415.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 15_16" d="M439.728 318.5L444.343 306.5H468.272L463.657 318.5H439.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 16_16" d="M463.728 318.5L468.343 306.5H492.272L487.657 318.5H463.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 17_16" d="M487.728 318.5L492.343 306.5H516.272L511.657 318.5H487.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 18_16" d="M511.728 318.5L516.343 306.5H540.272L535.657 318.5H511.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 21_16" d="M583.728 318.5L588.343 306.5H612.272L607.657 318.5H583.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 22_16" d="M607.728 318.5L612.343 306.5H636.272L631.657 318.5H607.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 23_16" d="M631.728 318.5L636.343 306.5H660.272L655.657 318.5H631.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 24_16" d="M655.728 318.5L660.343 306.5H684.272L679.657 318.5H655.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 25_16" d="M679.728 318.5L684.343 306.5H708.272L703.657 318.5H679.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 26_16" d="M703.728 318.5L708.343 306.5H732.272L727.657 318.5H703.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 27_16" d="M727.728 318.5L732.343 306.5H756.272L751.657 318.5H727.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 28_16" d="M751.728 318.5L756.343 306.5H780.272L775.657 318.5H751.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 29_16" d="M775.728 318.5L780.343 306.5H804.272L799.657 318.5H775.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 30_16" d="M799.728 318.5L804.343 306.5H828.272L823.657 318.5H799.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 31_16" d="M823.728 318.5L828.343 306.5H852.272L847.657 318.5H823.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 32_16" d="M847.728 318.5L852.343 306.5H876.272L871.657 318.5H847.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 33_16" d="M871.728 318.5L876.343 306.5H900.272L895.657 318.5H871.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 34_16" d="M895.728 318.5L900.343 306.5H924.272L919.657 318.5H895.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 35_16" d="M919.728 318.5L924.343 306.5H948.272L943.657 318.5H919.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 36_16" d="M943.728 318.5L948.343 306.5H972.272L967.657 318.5H943.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 37_16" d="M967.728 318.5L972.343 306.5H996.272L991.657 318.5H967.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 38_16" d="M991.728 318.5L996.343 306.5H1020.5V318.5H991.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 19_16" d="M535.728 318.5L540.343 306.5H564.272L559.657 318.5H535.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 20_16" d="M559.728 318.5L564.343 306.5H588.272L583.657 318.5H559.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Westham" d="M49.9287 315.066L51.1318 309.18H52.48L50.6753 317H49.3755L47.8877 311.291L46.3677 317H45.0625L43.2578 309.18H44.606L45.8198 315.056L47.313 309.18H48.4517L49.9287 315.066ZM56.3399 317.107C55.5127 317.107 54.8413 316.848 54.3257 316.329C53.8137 315.806 53.5576 315.111 53.5576 314.245V314.083C53.5576 313.503 53.6686 312.986 53.8906 312.531C54.1162 312.073 54.4313 311.717 54.836 311.462C55.2406 311.208 55.6918 311.081 56.1895 311.081C56.9808 311.081 57.5913 311.333 58.021 311.838C58.4543 312.343 58.6709 313.058 58.6709 313.981V314.508H54.8736C54.9129 314.988 55.0723 315.367 55.3516 315.646C55.6345 315.926 55.989 316.065 56.4151 316.065C57.013 316.065 57.5 315.824 57.876 315.34L58.5796 316.012C58.3469 316.359 58.0353 316.629 57.645 316.823C57.2583 317.013 56.8233 317.107 56.3399 317.107ZM56.1841 312.128C55.826 312.128 55.536 312.254 55.314 312.504C55.0956 312.755 54.9559 313.104 54.895 313.552H57.3819V313.455C57.3532 313.018 57.2368 312.689 57.0327 312.467C56.8286 312.241 56.5458 312.128 56.1841 312.128ZM63.5513 315.421C63.5513 315.188 63.4546 315.011 63.2613 314.889C63.0715 314.767 62.7546 314.66 62.3106 314.567C61.8666 314.474 61.496 314.356 61.1988 314.212C60.5471 313.897 60.2212 313.441 60.2212 312.843C60.2212 312.341 60.4325 311.923 60.855 311.586C61.2775 311.249 61.8147 311.081 62.4663 311.081C63.161 311.081 63.7214 311.253 64.1475 311.597C64.5772 311.94 64.792 312.386 64.792 312.934H63.4869C63.4869 312.683 63.3938 312.476 63.2076 312.311C63.0214 312.143 62.7743 312.059 62.4663 312.059C62.1799 312.059 61.9454 312.125 61.7627 312.257C61.5837 312.39 61.4942 312.567 61.4942 312.789C61.4942 312.99 61.5783 313.145 61.7466 313.256C61.9149 313.367 62.2551 313.48 62.7671 313.595C63.2792 313.706 63.6802 313.84 63.9703 313.998C64.2639 314.152 64.4805 314.338 64.6202 314.556C64.7634 314.775 64.835 315.04 64.835 315.351C64.835 315.874 64.6184 316.298 64.1851 316.624C63.7518 316.946 63.1843 317.107 62.4825 317.107C62.0062 317.107 61.5819 317.021 61.2095 316.85C60.8371 316.678 60.5471 316.441 60.3394 316.141C60.1317 315.84 60.0279 315.516 60.0279 315.168H61.2954C61.3134 315.476 61.4297 315.715 61.6446 315.883C61.8594 316.048 62.1441 316.13 62.4986 316.13C62.8423 316.13 63.1037 316.065 63.2828 315.937C63.4618 315.804 63.5513 315.632 63.5513 315.421ZM68.2169 309.776V311.188H69.2427V312.155H68.2169V315.399C68.2169 315.621 68.2598 315.783 68.3458 315.883C68.4353 315.979 68.5928 316.028 68.8184 316.028C68.9688 316.028 69.121 316.01 69.275 315.974V316.984C68.9778 317.066 68.6913 317.107 68.4156 317.107C67.413 317.107 66.9117 316.554 66.9117 315.448V312.155H65.9556V311.188H66.9117V309.776H68.2169ZM72.1358 311.822C72.5619 311.328 73.1008 311.081 73.7525 311.081C74.9915 311.081 75.6199 311.788 75.6378 313.203V317H74.3326V313.251C74.3326 312.85 74.2449 312.567 74.0694 312.402C73.8975 312.234 73.6433 312.15 73.3067 312.15C72.7839 312.15 72.3936 312.383 72.1358 312.848V317H70.8306V308.75H72.1358V311.822ZM81.0392 317C80.9819 316.889 80.9317 316.708 80.8888 316.458C80.4734 316.891 79.9649 317.107 79.3634 317.107C78.7797 317.107 78.3035 316.941 77.9347 316.608C77.5659 316.275 77.3814 315.863 77.3814 315.373C77.3814 314.753 77.6106 314.279 78.0689 313.949C78.5309 313.616 79.1897 313.45 80.0455 313.45H80.8458V313.068C80.8458 312.768 80.7617 312.528 80.5934 312.349C80.4251 312.166 80.169 312.075 79.8253 312.075C79.5281 312.075 79.2846 312.15 79.0948 312.3C78.905 312.447 78.8102 312.635 78.8102 312.864H77.505C77.505 312.546 77.6106 312.248 77.8219 311.973C78.0331 311.693 78.3196 311.475 78.6813 311.317C79.0465 311.16 79.4529 311.081 79.9005 311.081C80.5808 311.081 81.1233 311.253 81.5279 311.597C81.9326 311.937 82.1402 312.417 82.151 313.036V315.657C82.151 316.18 82.2244 316.597 82.3712 316.909V317H81.0392ZM79.6051 316.06C79.8629 316.06 80.1046 315.997 80.3302 315.872C80.5593 315.747 80.7312 315.578 80.8458 315.367V314.271H80.1422C79.6588 314.271 79.2953 314.356 79.0519 314.524C78.8084 314.692 78.6866 314.93 78.6866 315.238C78.6866 315.489 78.769 315.689 78.9337 315.84C79.102 315.987 79.3258 316.06 79.6051 316.06ZM85.3502 311.188L85.3878 311.795C85.796 311.319 86.3546 311.081 87.0636 311.081C87.8406 311.081 88.3724 311.378 88.6588 311.973C89.0813 311.378 89.6757 311.081 90.442 311.081C91.083 311.081 91.5592 311.258 91.8707 311.613C92.1858 311.967 92.347 312.49 92.3541 313.181V317H91.0489V313.219C91.0489 312.85 90.9684 312.58 90.8072 312.408C90.6461 312.236 90.3794 312.15 90.007 312.15C89.7098 312.15 89.4663 312.23 89.2765 312.392C89.0903 312.549 88.9596 312.757 88.8844 313.015L88.8898 317H87.5846V313.176C87.5667 312.492 87.2176 312.15 86.5372 312.15C86.0144 312.15 85.6438 312.363 85.4254 312.789V317H84.1202V311.188H85.3502Z" fill="white"/>
              </g>
              <g id="Group 17">
              <path id="Rectangle 1_17" d="M103.728 336.5L108.343 324.5H132.272L127.657 336.5H103.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 39_17" d="M36.5196 336.5L36.9811 324.5H108.272L103.657 336.5H36.5196Z" fill="#2F2E2E" stroke="black"/>
              <path id="Rectangle 2_17" d="M127.728 336.5L132.343 324.5H156.272L151.657 336.5H127.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 3_17" d="M151.728 336.5L156.343 324.5H180.272L175.657 336.5H151.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 4_17" d="M175.728 336.5L180.343 324.5H204.272L199.657 336.5H175.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 5_17" d="M199.728 336.5L204.343 324.5H228.272L223.657 336.5H199.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 6_17" d="M223.728 336.5L228.343 324.5H252.272L247.657 336.5H223.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 7_17" d="M247.728 336.5L252.343 324.5H276.272L271.657 336.5H247.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 8_17" d="M271.728 336.5L276.343 324.5H300.272L295.657 336.5H271.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 9_17" d="M295.728 336.5L300.343 324.5H324.272L319.657 336.5H295.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 10_17" d="M319.728 336.5L324.343 324.5H348.272L343.657 336.5H319.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 11_17" d="M343.728 336.5L348.343 324.5H372.272L367.657 336.5H343.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 12_17" d="M367.728 336.5L372.343 324.5H396.272L391.657 336.5H367.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 13_17" d="M391.728 336.5L396.343 324.5H420.272L415.657 336.5H391.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 14_17" d="M415.728 336.5L420.343 324.5H444.272L439.657 336.5H415.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 15_17" d="M439.728 336.5L444.343 324.5H468.272L463.657 336.5H439.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 16_17" d="M463.728 336.5L468.343 324.5H492.272L487.657 336.5H463.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 17_17" d="M487.728 336.5L492.343 324.5H516.272L511.657 336.5H487.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 18_17" d="M511.728 336.5L516.343 324.5H540.272L535.657 336.5H511.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 21_17" d="M583.728 336.5L588.343 324.5H612.272L607.657 336.5H583.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 22_17" d="M607.728 336.5L612.343 324.5H636.272L631.657 336.5H607.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 23_17" d="M631.728 336.5L636.343 324.5H660.272L655.657 336.5H631.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 24_17" d="M655.728 336.5L660.343 324.5H684.272L679.657 336.5H655.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 25_17" d="M679.728 336.5L684.343 324.5H708.272L703.657 336.5H679.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 26_17" d="M703.728 336.5L708.343 324.5H732.272L727.657 336.5H703.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 27_17" d="M727.728 336.5L732.343 324.5H756.272L751.657 336.5H727.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 28_17" d="M751.728 336.5L756.343 324.5H780.272L775.657 336.5H751.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 29_17" d="M775.728 336.5L780.343 324.5H804.272L799.657 336.5H775.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 30_17" d="M799.728 336.5L804.343 324.5H828.272L823.657 336.5H799.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 31_17" d="M823.728 336.5L828.343 324.5H852.272L847.657 336.5H823.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 32_17" d="M847.728 336.5L852.343 324.5H876.272L871.657 336.5H847.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 33_17" d="M871.728 336.5L876.343 324.5H900.272L895.657 336.5H871.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 34_17" d="M895.728 336.5L900.343 324.5H924.272L919.657 336.5H895.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 35_17" d="M919.728 336.5L924.343 324.5H948.272L943.657 336.5H919.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 36_17" d="M943.728 336.5L948.343 324.5H972.272L967.657 336.5H943.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 37_17" d="M967.728 336.5L972.343 324.5H996.272L991.657 336.5H967.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 38_17" d="M991.728 336.5L996.343 324.5H1020.5V336.5H991.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 19_17" d="M535.728 336.5L540.343 324.5H564.272L559.657 336.5H535.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 20_17" d="M559.728 336.5L564.343 324.5H588.272L583.657 336.5H559.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Watford" d="M49.9287 333.066L51.1318 327.18H52.48L50.6753 335H49.3755L47.8877 329.291L46.3677 335H45.0625L43.2578 327.18H44.606L45.8198 333.056L47.313 327.18H48.4517L49.9287 333.066ZM57.2422 335C57.1849 334.889 57.1348 334.708 57.0918 334.458C56.6765 334.891 56.168 335.107 55.5664 335.107C54.9828 335.107 54.5065 334.941 54.1377 334.608C53.7689 334.275 53.5845 333.863 53.5845 333.373C53.5845 332.753 53.8137 332.279 54.272 331.949C54.7339 331.616 55.3928 331.45 56.2486 331.45H57.0488V331.068C57.0488 330.768 56.9647 330.528 56.7964 330.349C56.6281 330.166 56.3721 330.075 56.0283 330.075C55.7311 330.075 55.4876 330.15 55.2979 330.3C55.1081 330.447 55.0132 330.635 55.0132 330.864H53.708C53.708 330.546 53.8137 330.248 54.0249 329.973C54.2362 329.693 54.5226 329.475 54.8843 329.317C55.2495 329.16 55.6559 329.081 56.1035 329.081C56.7839 329.081 57.3264 329.253 57.731 329.597C58.1356 329.937 58.3433 330.417 58.354 331.036V333.657C58.354 334.18 58.4274 334.597 58.5742 334.909V335H57.2422ZM55.8081 334.06C56.0659 334.06 56.3076 333.997 56.5332 333.872C56.7624 333.747 56.9343 333.578 57.0488 333.367V332.271H56.3452C55.8618 332.271 55.4984 332.356 55.2549 332.524C55.0114 332.692 54.8897 332.93 54.8897 333.238C54.8897 333.489 54.972 333.689 55.1367 333.84C55.305 333.987 55.5288 334.06 55.8081 334.06ZM61.9615 327.776V329.188H62.9873V330.155H61.9615V333.399C61.9615 333.621 62.0044 333.783 62.0904 333.883C62.1799 333.979 62.3374 334.028 62.563 334.028C62.7134 334.028 62.8656 334.01 63.0196 333.974V334.984C62.7224 335.066 62.4359 335.107 62.1602 335.107C61.1576 335.107 60.6563 334.554 60.6563 333.448V330.155H59.7002V329.188H60.6563V327.776H61.9615ZM65.0533 335V330.155H64.1671V329.188H65.0533V328.657C65.0533 328.012 65.2323 327.514 65.5904 327.164C65.9485 326.813 66.4498 326.637 67.0943 326.637C67.3235 326.637 67.567 326.669 67.8248 326.734L67.7925 327.754C67.6493 327.726 67.4828 327.711 67.293 327.711C66.67 327.711 66.3585 328.032 66.3585 328.673V329.188H67.5401V330.155H66.3585V335H65.0533ZM68.8541 332.041C68.8541 331.471 68.9669 330.959 69.1925 330.504C69.418 330.046 69.7349 329.695 70.1431 329.452C70.5513 329.205 71.0204 329.081 71.5504 329.081C72.3346 329.081 72.9701 329.333 73.4571 329.838C73.9477 330.343 74.2126 331.013 74.252 331.847L74.2574 332.153C74.2574 332.726 74.1464 333.238 73.9244 333.689C73.706 334.141 73.3909 334.49 72.9791 334.737C72.5709 334.984 72.0982 335.107 71.5611 335.107C70.7411 335.107 70.0841 334.835 69.5899 334.291C69.0994 333.743 68.8541 333.014 68.8541 332.105V332.041ZM70.1593 332.153C70.1593 332.751 70.2828 333.22 70.5299 333.561C70.7769 333.897 71.1207 334.065 71.5611 334.065C72.0015 334.065 72.3435 333.894 72.587 333.55C72.8341 333.206 72.9576 332.703 72.9576 332.041C72.9576 331.453 72.8305 330.988 72.5763 330.644C72.3256 330.3 71.9836 330.128 71.5504 330.128C71.1243 330.128 70.7859 330.299 70.5352 330.639C70.2846 330.975 70.1593 331.48 70.1593 332.153ZM79.0089 330.381C78.837 330.352 78.6598 330.338 78.4771 330.338C77.8792 330.338 77.4763 330.567 77.2687 331.025V335H75.9635V329.188H77.2096L77.2418 329.838C77.5569 329.333 77.9938 329.081 78.5523 329.081C78.7385 329.081 78.8925 329.106 79.0143 329.156L79.0089 330.381ZM80.0865 332.051C80.0865 331.156 80.2942 330.438 80.7096 329.897C81.125 329.353 81.6818 329.081 82.38 329.081C82.9959 329.081 83.4936 329.296 83.8732 329.726V326.75H85.1783V335H83.9967L83.9322 334.398C83.5419 334.871 83.021 335.107 82.3693 335.107C81.6889 335.107 81.1375 334.833 80.715 334.286C80.296 333.738 80.0865 332.993 80.0865 332.051ZM81.3917 332.164C81.3917 332.755 81.5045 333.217 81.7301 333.55C81.9593 333.879 82.2833 334.044 82.7023 334.044C83.2358 334.044 83.6261 333.806 83.8732 333.33V330.848C83.6333 330.383 83.2465 330.15 82.713 330.15C82.2905 330.15 81.9646 330.318 81.7355 330.655C81.5063 330.988 81.3917 331.491 81.3917 332.164Z" fill="white"/>
              </g>
              <g id="Group 18">
              <path id="Rectangle 1_18" d="M103.728 354.5L108.343 342.5H132.272L127.657 354.5H103.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 39_18" d="M36.5196 354.5L36.9811 342.5H108.272L103.657 354.5H36.5196Z" fill="#2F2E2E" stroke="black"/>
              <path id="Rectangle 2_18" d="M127.728 354.5L132.343 342.5H156.272L151.657 354.5H127.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 3_18" d="M151.728 354.5L156.343 342.5H180.272L175.657 354.5H151.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 4_18" d="M175.728 354.5L180.343 342.5H204.272L199.657 354.5H175.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 5_18" d="M199.728 354.5L204.343 342.5H228.272L223.657 354.5H199.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 6_18" d="M223.728 354.5L228.343 342.5H252.272L247.657 354.5H223.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 7_18" d="M247.728 354.5L252.343 342.5H276.272L271.657 354.5H247.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 8_18" d="M271.728 354.5L276.343 342.5H300.272L295.657 354.5H271.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 9_18" d="M295.728 354.5L300.343 342.5H324.272L319.657 354.5H295.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 10_18" d="M319.728 354.5L324.343 342.5H348.272L343.657 354.5H319.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 11_18" d="M343.728 354.5L348.343 342.5H372.272L367.657 354.5H343.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 12_18" d="M367.728 354.5L372.343 342.5H396.272L391.657 354.5H367.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 13_18" d="M391.728 354.5L396.343 342.5H420.272L415.657 354.5H391.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 14_18" d="M415.728 354.5L420.343 342.5H444.272L439.657 354.5H415.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 15_18" d="M439.728 354.5L444.343 342.5H468.272L463.657 354.5H439.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 16_18" d="M463.728 354.5L468.343 342.5H492.272L487.657 354.5H463.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 17_18" d="M487.728 354.5L492.343 342.5H516.272L511.657 354.5H487.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 18_18" d="M511.728 354.5L516.343 342.5H540.272L535.657 354.5H511.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 21_18" d="M583.728 354.5L588.343 342.5H612.272L607.657 354.5H583.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 22_18" d="M607.728 354.5L612.343 342.5H636.272L631.657 354.5H607.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 23_18" d="M631.728 354.5L636.343 342.5H660.272L655.657 354.5H631.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 24_18" d="M655.728 354.5L660.343 342.5H684.272L679.657 354.5H655.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 25_18" d="M679.728 354.5L684.343 342.5H708.272L703.657 354.5H679.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 26_18" d="M703.728 354.5L708.343 342.5H732.272L727.657 354.5H703.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 27_18" d="M727.728 354.5L732.343 342.5H756.272L751.657 354.5H727.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 28_18" d="M751.728 354.5L756.343 342.5H780.272L775.657 354.5H751.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 29_18" d="M775.728 354.5L780.343 342.5H804.272L799.657 354.5H775.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 30_18" d="M799.728 354.5L804.343 342.5H828.272L823.657 354.5H799.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 31_18" d="M823.728 354.5L828.343 342.5H852.272L847.657 354.5H823.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 32_18" d="M847.728 354.5L852.343 342.5H876.272L871.657 354.5H847.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 33_18" d="M871.728 354.5L876.343 342.5H900.272L895.657 354.5H871.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 34_18" d="M895.728 354.5L900.343 342.5H924.272L919.657 354.5H895.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 35_18" d="M919.728 354.5L924.343 342.5H948.272L943.657 354.5H919.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 36_18" d="M943.728 354.5L948.343 342.5H972.272L967.657 354.5H943.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 37_18" d="M967.728 354.5L972.343 342.5H996.272L991.657 354.5H967.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 38_18" d="M991.728 354.5L996.343 342.5H1020.5V354.5H991.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 19_18" d="M535.728 354.5L540.343 342.5H564.272L559.657 354.5H535.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 20_18" d="M559.728 354.5L564.343 342.5H588.272L583.657 354.5H559.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="AFC" d="M48.1724 351.179H45.1431L44.5093 353H43.0967L46.0508 345.18H47.27L50.2295 353H48.8115L48.1724 351.179ZM45.5244 350.083H47.791L46.6577 346.839L45.5244 350.083ZM56.2324 349.686H53.085V353H51.7261V345.18H56.6944V346.275H53.085V348.601H56.2324V349.686ZM64.3462 350.454C64.2675 351.288 63.9595 351.94 63.4224 352.409C62.8853 352.875 62.1709 353.107 61.2793 353.107C60.6563 353.107 60.1066 352.961 59.6304 352.667C59.1578 352.37 58.7925 351.949 58.5347 351.405C58.2769 350.861 58.1426 350.229 58.1319 349.509V348.778C58.1319 348.041 58.2626 347.391 58.524 346.829C58.7854 346.266 59.1595 345.833 59.6465 345.529C60.1371 345.224 60.7028 345.072 61.3438 345.072C62.2067 345.072 62.9014 345.307 63.4278 345.776C63.9541 346.245 64.2603 346.907 64.3462 347.763H62.9927C62.9283 347.201 62.7635 346.796 62.4986 346.549C62.2372 346.299 61.8523 346.173 61.3438 346.173C60.753 346.173 60.2982 346.39 59.9795 346.823C59.6644 347.253 59.5033 347.885 59.4961 348.719V349.412C59.4961 350.257 59.6465 350.902 59.9473 351.346C60.2517 351.79 60.6957 352.012 61.2793 352.012C61.8129 352.012 62.2139 351.892 62.4825 351.652C62.751 351.412 62.9211 351.013 62.9927 350.454H64.3462Z" fill="white"/>
              </g>
              <g id="Group 19">
              <path id="Rectangle 1_19" d="M102.728 372.5L107.343 360.5H131.272L126.657 372.5H102.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 39_19" d="M35.5196 372.5L35.9811 360.5H107.272L102.657 372.5H35.5196Z" fill="#2F2E2E" stroke="black"/>
              <path id="Rectangle 2_19" d="M126.728 372.5L131.343 360.5H155.272L150.657 372.5H126.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 3_19" d="M150.728 372.5L155.343 360.5H179.272L174.657 372.5H150.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 4_19" d="M174.728 372.5L179.343 360.5H203.272L198.657 372.5H174.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 5_19" d="M198.728 372.5L203.343 360.5H227.272L222.657 372.5H198.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 6_19" d="M222.728 372.5L227.343 360.5H251.272L246.657 372.5H222.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 7_19" d="M246.728 372.5L251.343 360.5H275.272L270.657 372.5H246.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 8_19" d="M270.728 372.5L275.343 360.5H299.272L294.657 372.5H270.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 9_19" d="M294.728 372.5L299.343 360.5H323.272L318.657 372.5H294.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 10_19" d="M318.728 372.5L323.343 360.5H347.272L342.657 372.5H318.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 11_19" d="M342.728 372.5L347.343 360.5H371.272L366.657 372.5H342.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 12_19" d="M366.728 372.5L371.343 360.5H395.272L390.657 372.5H366.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 13_19" d="M390.728 372.5L395.343 360.5H419.272L414.657 372.5H390.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 14_19" d="M414.728 372.5L419.343 360.5H443.272L438.657 372.5H414.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 15_19" d="M438.728 372.5L443.343 360.5H467.272L462.657 372.5H438.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 16_19" d="M462.728 372.5L467.343 360.5H491.272L486.657 372.5H462.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 17_19" d="M486.728 372.5L491.343 360.5H515.272L510.657 372.5H486.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 18_19" d="M510.728 372.5L515.343 360.5H539.272L534.657 372.5H510.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 21_19" d="M582.728 372.5L587.343 360.5H611.272L606.657 372.5H582.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 22_19" d="M606.728 372.5L611.343 360.5H635.272L630.657 372.5H606.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 23_19" d="M630.728 372.5L635.343 360.5H659.272L654.657 372.5H630.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 24_19" d="M654.728 372.5L659.343 360.5H683.272L678.657 372.5H654.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 25_19" d="M678.728 372.5L683.343 360.5H707.272L702.657 372.5H678.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 26_19" d="M702.728 372.5L707.343 360.5H731.272L726.657 372.5H702.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 27_19" d="M726.728 372.5L731.343 360.5H755.272L750.657 372.5H726.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 28_19" d="M750.728 372.5L755.343 360.5H779.272L774.657 372.5H750.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 29_19" d="M774.728 372.5L779.343 360.5H803.272L798.657 372.5H774.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 30_19" d="M798.728 372.5L803.343 360.5H827.272L822.657 372.5H798.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 31_19" d="M822.728 372.5L827.343 360.5H851.272L846.657 372.5H822.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 32_19" d="M846.728 372.5L851.343 360.5H875.272L870.657 372.5H846.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 33_19" d="M870.728 372.5L875.343 360.5H899.272L894.657 372.5H870.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 34_19" d="M894.728 372.5L899.343 360.5H923.272L918.657 372.5H894.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 35_19" d="M918.728 372.5L923.343 360.5H947.272L942.657 372.5H918.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 36_19" d="M942.728 372.5L947.343 360.5H971.272L966.657 372.5H942.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 37_19" d="M966.728 372.5L971.343 360.5H995.272L990.657 372.5H966.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 38_19" d="M990.728 372.5L995.343 360.5H1019.5V372.5H990.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 19_19" d="M534.728 372.5L539.343 360.5H563.272L558.657 372.5H534.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 20_19" d="M558.728 372.5L563.343 360.5H587.272L582.657 372.5H558.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="AstonVilla" d="M48.1724 369.179H45.1431L44.5093 371H43.0967L46.0508 363.18H47.27L50.2295 371H48.8115L48.1724 369.179ZM45.5244 368.083H47.791L46.6577 364.839L45.5244 368.083ZM54.8574 369.421C54.8574 369.188 54.7608 369.011 54.5674 368.889C54.3776 368.767 54.0607 368.66 53.6167 368.567C53.1727 368.474 52.8021 368.356 52.5049 368.212C51.8532 367.897 51.5274 367.441 51.5274 366.843C51.5274 366.341 51.7386 365.923 52.1612 365.586C52.5837 365.249 53.1208 365.081 53.7725 365.081C54.4671 365.081 55.0275 365.253 55.4536 365.597C55.8833 365.94 56.0982 366.386 56.0982 366.934H54.793C54.793 366.683 54.6999 366.476 54.5137 366.311C54.3275 366.143 54.0804 366.059 53.7725 366.059C53.486 366.059 53.2515 366.125 53.0689 366.257C52.8898 366.39 52.8003 366.567 52.8003 366.789C52.8003 366.99 52.8845 367.145 53.0528 367.256C53.221 367.367 53.5612 367.48 54.0733 367.595C54.5853 367.706 54.9863 367.84 55.2764 367.998C55.57 368.152 55.7866 368.338 55.9263 368.556C56.0695 368.775 56.1411 369.04 56.1411 369.351C56.1411 369.874 55.9245 370.298 55.4912 370.624C55.058 370.946 54.4904 371.107 53.7886 371.107C53.3124 371.107 52.888 371.021 52.5156 370.85C52.1432 370.678 51.8532 370.441 51.6455 370.141C51.4378 369.84 51.334 369.516 51.334 369.168H52.6016C52.6195 369.476 52.7359 369.715 52.9507 369.883C53.1655 370.048 53.4502 370.13 53.8047 370.13C54.1485 370.13 54.4099 370.065 54.5889 369.937C54.7679 369.804 54.8574 369.632 54.8574 369.421ZM59.523 363.776V365.188H60.5489V366.155H59.523V369.399C59.523 369.621 59.566 369.783 59.6519 369.883C59.7414 369.979 59.899 370.028 60.1246 370.028C60.2749 370.028 60.4271 370.01 60.5811 369.974V370.984C60.2839 371.066 59.9974 371.107 59.7217 371.107C58.7191 371.107 58.2178 370.554 58.2178 369.448V366.155H57.2618V365.188H58.2178V363.776H59.523ZM61.7501 368.041C61.7501 367.471 61.8629 366.959 62.0884 366.504C62.314 366.046 62.6309 365.695 63.0391 365.452C63.4473 365.205 63.9164 365.081 64.4463 365.081C65.2305 365.081 65.8661 365.333 66.3531 365.838C66.8436 366.343 67.1086 367.013 67.148 367.847L67.1534 368.153C67.1534 368.726 67.0424 369.238 66.8204 369.689C66.6019 370.141 66.2868 370.49 65.8751 370.737C65.4669 370.984 64.9942 371.107 64.4571 371.107C63.6371 371.107 62.98 370.835 62.4859 370.291C61.9953 369.743 61.7501 369.014 61.7501 368.105V368.041ZM63.0552 368.153C63.0552 368.751 63.1788 369.22 63.4258 369.561C63.6729 369.897 64.0167 370.065 64.4571 370.065C64.8975 370.065 65.2395 369.894 65.483 369.55C65.73 369.206 65.8536 368.703 65.8536 368.041C65.8536 367.453 65.7265 366.988 65.4722 366.644C65.2216 366.3 64.8796 366.128 64.4463 366.128C64.0202 366.128 63.6819 366.299 63.4312 366.639C63.1806 366.975 63.0552 367.48 63.0552 368.153ZM70.0733 365.188L70.1109 365.86C70.5406 365.341 71.1046 365.081 71.8028 365.081C73.0131 365.081 73.629 365.774 73.6505 367.16V371H72.3453V367.235C72.3453 366.866 72.2647 366.594 72.1036 366.418C71.946 366.239 71.6864 366.15 71.3248 366.15C70.7984 366.15 70.4063 366.388 70.1485 366.864V371H68.8433V365.188H70.0733ZM78.4718 369.297L80.4591 363.18H81.9522L79.1378 371H77.8219L75.0182 363.18H76.506L78.4718 369.297ZM84.7057 371H83.4005V365.188H84.7057V371ZM83.3199 363.679C83.3199 363.479 83.3826 363.312 83.5079 363.18C83.6368 363.047 83.8195 362.981 84.0558 362.981C84.2921 362.981 84.4747 363.047 84.6036 363.18C84.7325 363.312 84.797 363.479 84.797 363.679C84.797 363.876 84.7325 364.041 84.6036 364.173C84.4747 364.302 84.2921 364.367 84.0558 364.367C83.8195 364.367 83.6368 364.302 83.5079 364.173C83.3826 364.041 83.3199 363.876 83.3199 363.679ZM88.1251 371H86.82V362.75H88.1251V371ZM91.5446 371H90.2394V362.75H91.5446V371ZM97.048 371C96.9907 370.889 96.9406 370.708 96.8976 370.458C96.4823 370.891 95.9738 371.107 95.3722 371.107C94.7886 371.107 94.3123 370.941 93.9435 370.608C93.5747 370.275 93.3903 369.863 93.3903 369.373C93.3903 368.753 93.6195 368.279 94.0778 367.949C94.5397 367.616 95.1986 367.45 96.0544 367.45H96.8547V367.068C96.8547 366.768 96.7705 366.528 96.6022 366.349C96.4339 366.166 96.1779 366.075 95.8342 366.075C95.537 366.075 95.2935 366.15 95.1037 366.3C94.9139 366.447 94.819 366.635 94.819 366.864H93.5138C93.5138 366.546 93.6195 366.248 93.8307 365.973C94.042 365.693 94.3285 365.475 94.6901 365.317C95.0554 365.16 95.4618 365.081 95.9094 365.081C96.5897 365.081 97.1322 365.253 97.5368 365.597C97.9414 365.937 98.1491 366.417 98.1598 367.036V369.657C98.1598 370.18 98.2332 370.597 98.3801 370.909V371H97.048ZM95.6139 370.06C95.8718 370.06 96.1135 369.997 96.339 369.872C96.5682 369.747 96.7401 369.578 96.8547 369.367V368.271H96.1511C95.6677 368.271 95.3042 368.356 95.0607 368.524C94.8172 368.692 94.6955 368.93 94.6955 369.238C94.6955 369.489 94.7778 369.689 94.9426 369.84C95.1109 369.987 95.3346 370.06 95.6139 370.06Z" fill="white"/>
              </g>
              <g id="Group 20">
              <path id="Rectangle 1_20" d="M103.728 390.5L108.343 378.5H132.272L127.657 390.5H103.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 39_20" d="M36.5196 390.5L36.9811 378.5H108.272L103.657 390.5H36.5196Z" fill="#2F2E2E" stroke="black"/>
              <path id="Rectangle 2_20" d="M127.728 390.5L132.343 378.5H156.272L151.657 390.5H127.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 3_20" d="M151.728 390.5L156.343 378.5H180.272L175.657 390.5H151.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 4_20" d="M175.728 390.5L180.343 378.5H204.272L199.657 390.5H175.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 5_20" d="M199.728 390.5L204.343 378.5H228.272L223.657 390.5H199.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 6_20" d="M223.728 390.5L228.343 378.5H252.272L247.657 390.5H223.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 7_20" d="M247.728 390.5L252.343 378.5H276.272L271.657 390.5H247.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 8_20" d="M271.728 390.5L276.343 378.5H300.272L295.657 390.5H271.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 9_20" d="M295.728 390.5L300.343 378.5H324.272L319.657 390.5H295.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 10_20" d="M319.728 390.5L324.343 378.5H348.272L343.657 390.5H319.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 11_20" d="M343.728 390.5L348.343 378.5H372.272L367.657 390.5H343.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 12_20" d="M367.728 390.5L372.343 378.5H396.272L391.657 390.5H367.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 13_20" d="M391.728 390.5L396.343 378.5H420.272L415.657 390.5H391.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 14_20" d="M415.728 390.5L420.343 378.5H444.272L439.657 390.5H415.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 15_20" d="M439.728 390.5L444.343 378.5H468.272L463.657 390.5H439.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 16_20" d="M463.728 390.5L468.343 378.5H492.272L487.657 390.5H463.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 17_20" d="M487.728 390.5L492.343 378.5H516.272L511.657 390.5H487.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 18_20" d="M511.728 390.5L516.343 378.5H540.272L535.657 390.5H511.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 21_20" d="M583.728 390.5L588.343 378.5H612.272L607.657 390.5H583.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 22_20" d="M607.728 390.5L612.343 378.5H636.272L631.657 390.5H607.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 23_20" d="M631.728 390.5L636.343 378.5H660.272L655.657 390.5H631.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 24_20" d="M655.728 390.5L660.343 378.5H684.272L679.657 390.5H655.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 25_20" d="M679.728 390.5L684.343 378.5H708.272L703.657 390.5H679.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 26_20" d="M703.728 390.5L708.343 378.5H732.272L727.657 390.5H703.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 27_20" d="M727.728 390.5L732.343 378.5H756.272L751.657 390.5H727.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 28_20" d="M751.728 390.5L756.343 378.5H780.272L775.657 390.5H751.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 29_20" d="M775.728 390.5L780.343 378.5H804.272L799.657 390.5H775.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 30_20" d="M799.728 390.5L804.343 378.5H828.272L823.657 390.5H799.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 31_20" d="M823.728 390.5L828.343 378.5H852.272L847.657 390.5H823.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 32_20" d="M847.728 390.5L852.343 378.5H876.272L871.657 390.5H847.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 33_20" d="M871.728 390.5L876.343 378.5H900.272L895.657 390.5H871.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 34_20" d="M895.728 390.5L900.343 378.5H924.272L919.657 390.5H895.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 35_20" d="M919.728 390.5L924.343 378.5H948.272L943.657 390.5H919.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 36_20" d="M943.728 390.5L948.343 378.5H972.272L967.657 390.5H943.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 37_20" d="M967.728 390.5L972.343 378.5H996.272L991.657 390.5H967.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 38_20" d="M991.728 390.5L996.343 378.5H1020.5V390.5H991.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 19_20" d="M535.728 390.5L540.343 378.5H564.272L559.657 390.5H535.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Rectangle 20_20" d="M559.728 390.5L564.343 378.5H588.272L583.657 390.5H559.728Z" fill="#C4C4C4" stroke="black"/>
              <path id="Norwich" d="M49.9985 389H48.6396L45.1538 383.452V389H43.7949V381.18H45.1538L48.6504 386.75V381.18H49.9985V389ZM51.8389 386.041C51.8389 385.471 51.9517 384.959 52.1773 384.504C52.4029 384.046 52.7197 383.695 53.1279 383.452C53.5362 383.205 54.0052 383.081 54.5352 383.081C55.3194 383.081 55.9549 383.333 56.4419 383.838C56.9325 384.343 57.1974 385.013 57.2368 385.847L57.2422 386.153C57.2422 386.726 57.1312 387.238 56.9092 387.689C56.6908 388.141 56.3757 388.49 55.9639 388.737C55.5557 388.984 55.083 389.107 54.5459 389.107C53.7259 389.107 53.0689 388.835 52.5747 388.291C52.0842 387.743 51.8389 387.014 51.8389 386.105V386.041ZM53.1441 386.153C53.1441 386.751 53.2676 387.22 53.5147 387.561C53.7617 387.897 54.1055 388.065 54.5459 388.065C54.9863 388.065 55.3283 387.894 55.5718 387.55C55.8189 387.206 55.9424 386.703 55.9424 386.041C55.9424 385.453 55.8153 384.988 55.5611 384.644C55.3104 384.3 54.9684 384.128 54.5352 384.128C54.1091 384.128 53.7707 384.299 53.52 384.639C53.2694 384.975 53.1441 385.48 53.1441 386.153ZM61.9937 384.381C61.8218 384.352 61.6446 384.338 61.462 384.338C60.864 384.338 60.4611 384.567 60.2535 385.025V389H58.9483V383.188H60.1944L60.2266 383.838C60.5417 383.333 60.9786 383.081 61.5371 383.081C61.7233 383.081 61.8773 383.106 61.9991 383.156L61.9937 384.381ZM68.6251 387.201L69.5489 383.188H70.8218L69.2374 389H68.1631L66.9171 385.009L65.6924 389H64.6182L63.0284 383.188H64.3013L65.2413 387.158L66.4337 383.188H67.4166L68.6251 387.201ZM73.6881 389H72.3829V383.188H73.6881V389ZM72.3023 381.679C72.3023 381.479 72.365 381.312 72.4903 381.18C72.6192 381.047 72.8018 380.981 73.0382 380.981C73.2745 380.981 73.4571 381.047 73.586 381.18C73.7149 381.312 73.7794 381.479 73.7794 381.679C73.7794 381.876 73.7149 382.041 73.586 382.173C73.4571 382.302 73.2745 382.367 73.0382 382.367C72.8018 382.367 72.6192 382.302 72.4903 382.173C72.365 382.041 72.3023 381.876 72.3023 381.679ZM78.1065 388.065C78.4324 388.065 78.7027 387.971 78.9176 387.781C79.1324 387.591 79.247 387.356 79.2613 387.077H80.4913C80.477 387.439 80.3642 387.777 80.1529 388.092C79.9417 388.404 79.6552 388.651 79.2936 388.833C78.9319 389.016 78.5416 389.107 78.1227 389.107C77.3098 389.107 76.6653 388.844 76.1891 388.318C75.7128 387.792 75.4747 387.065 75.4747 386.137V386.003C75.4747 385.118 75.711 384.411 76.1837 383.881C76.6563 383.348 77.3009 383.081 78.1173 383.081C78.8084 383.081 79.3705 383.283 79.8038 383.688C80.2407 384.089 80.4698 384.617 80.4913 385.272H79.2613C79.247 384.939 79.1324 384.666 78.9176 384.451C78.7063 384.236 78.436 384.128 78.1065 384.128C77.684 384.128 77.3582 384.282 77.129 384.59C76.8998 384.895 76.7835 385.358 76.7799 385.981V386.191C76.7799 386.821 76.8927 387.292 77.1183 387.604C77.3474 387.911 77.6769 388.065 78.1065 388.065ZM83.3683 383.822C83.7944 383.328 84.3333 383.081 84.985 383.081C86.2239 383.081 86.8523 383.788 86.8702 385.203V389H85.5651V385.251C85.5651 384.85 85.4773 384.567 85.3019 384.402C85.13 384.234 84.8758 384.15 84.5392 384.15C84.0164 384.15 83.6261 384.383 83.3683 384.848V389H82.0631V380.75H83.3683V383.822Z" fill="white"/>
              </g>
              </g>
              </svg>

            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
        <ReactTooltip type='dark' multiline={true}/>
      </div>
    );
  }
}

export default StatTable;



/**
 * // When the user clicks on div, open the popup
  var popupevent = document.getElementById("pp");
  var popup = document.getElementById("myPopup");
  
  popupevent.addEventListener("mouseenter", function( event ) {
  	popup.classList.toggle("show");
  });
  
  popupevent.addEventListener("mouseleave",function(){
  	popup.classList.toggle("show");
  });
 * 
*/
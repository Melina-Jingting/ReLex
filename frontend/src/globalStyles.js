import { createGlobalStyle } from "styled-components";

const Styles = createGlobalStyle`

    body,
    html,
    a {
        font-family: 'Ubuntu', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
    }

    html, body, main, #app, #app>div, #container {
        height: 100%
      }

    a:hover {
        color: #000;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Ubuntu', sans-serif;
        color: #0a1f44;
        font-size: 2.575rem;
        line-height: 3.0625rem;
      
        @media only screen and (max-width: 414px) {
          font-size: 1.625rem;
        }
    }

    p {
        color: #343D48;
        font-size: 1.125rem;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #2E186A;

        :hover {
            color: #2e186a;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        padding: 1.25rem;
        text-align: left;
        padding-top: 2.5rem;
        padding-right: 2rem;
    }

    .anticon,
    .ant-notification-notice-icon-success {
        color: rgb(255,130,92);
    }

    /* Tree */
    .rd3t-tree-container {
    width: 100%;
    height: 100%;
    }

    .rd3t-grabbable {
    cursor: move; /* fallback if grab cursor is unsupported */
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
    }
    .rd3t-grabbable:active {
        cursor: grabbing;
        cursor: -moz-grabbing;
        cursor: -webkit-grabbing;
    }

    /* Node */
    .rd3t-node-central-node {
        cursor: pointer;
        fill: #76D7C4;
    }

    .rd3t-node-industry {
    cursor: pointer;
    fill: #76D7C4;
    stroke-width: 2;
    }

    .rd3t-node-company {
        cursor: pointer;
        fill: #76D7C4;
        stroke-width: 2;
    }

    .rd3t-node-experience {
        cursor: pointer;
        fill: #A9CCE3 ;
        stroke-width: 2;
    }

    .rd3t-node-education {
        cursor: pointer;
        fill: #D2B4DE;
        stroke-width: 2;
    }


    .rd3t-label__title {
    fill: #000;
    stroke-width: 1;
    font-size: smaller;
    }

    .rd3t-label__subtitle {
    fill: #777;
    font-size: smaller;
    }

    .rd3t-label__percentage {
        fill: #FFFFFF;
        font-size: smaller;
        }

    /* Link */
    .rd3t-link {
    cursor: pointer;
    fill: none;
    stroke-width: 2;
    stroke: #EEEEEE;
    }
    
    /* Filter Form */
    .filter-form {
        width:330px !important;
    }

    /*Filter Chips*/
    .filter-chips-container {
        display: flex;
        justify-content: left;
        flex-wrap:wrap;
    }

    .filter-chip {
        margin: 5px !important;
    }

    .spinner {
        display: block !important;
        position: fixed !important;
        top: 50% !important;
        right: 50% !important; /* or: left: 50%; */
        margin-top: -..px !important; /* half of the elements height */
        margin-right: -..px !important; /* half of the elements widht */
    }

    .full-width {
        width: 100%;
    }

    .full-height {
        height: 100%;
    }
    
    .fill-container {
        width: 100%;
        height: 100%;
    }

    .almost-full-height {
        height: 90% ;
    }
    
    .tree-panel {
        height: 1500px !important;
    }
    
    .scrollable {
        overflow-y : scroll !important;
    }
`;

export default Styles;

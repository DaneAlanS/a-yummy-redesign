import React, { useState } from 'react';
import {Container,Row, Col, Button,Tabs,Tab} from 'react-bootstrap';

import MetaStep1 from '../../static/assets/metamask.png'
import MetaStep2 from '../../static/assets/partners/pancakeswap.png'
import MetaStep3 from '../../static/assets/connect.png'
import MetaStep4 from '../../static/assets/yummysearch.png'
import MetaStep5 from '../../static/assets/slippage.png'
import MetaStep6 from '../../static/assets/LogoSquare.png';

function LearnMetaWallet(){
        return(
                <Tabs defaultActiveKey="Step1"className="meta-wallet-steps mb-3">
                    <Tab eventKey="Step1" title="Step 1">
                    <img className="metastep"src={MetaStep1}></img>
                    <div className="instructions">
                        <h3>Download MetaMask or use an existing wallet</h3>
                        <p>Head to metamask.io and download their wallet to your Smart Phone or Chrome/Firefox browser.
                        (This is where your Yummy Coins will be securely stored)</p>
                    </div>
                    </Tab>
                    <Tab eventKey="Step2" title="Step 2">
                    <img className="metastep"src={MetaStep2}></img>
                    <div className="instructions">
                        <h3>Go to <a href="https://pancakeswap.finance/" target="_blank" rel="noreferrer noopener">PancakeSwap</a></h3>
                        <p>PancakeSwap is where you’ll be performing the swap of your current tokens to $YUMMY
                        (Make sure you have already purchases BNB Smart Chain to perform this exchange)</p>
                    </div>            
                    </Tab>
                    <Tab eventKey="Step3" title="Step 3">
                    <img className="metastep"src={MetaStep3}></img>
                    <div className="instructions meta">
                        <h3>When you are in Pancake Swap, navigate to the trade screen</h3>
                        <p>Click “Connect” at the top right of the screen, and then navigate to “Trade” on the left sidebar.</p>
                        <span>If using Metamask, go to <strong>Settings</strong> <i class="fas fa-arrow-right"></i> <strong>Networks</strong> <i class="fas fa-arrow-right"></i> <strong>Add Network</strong> and enter the following:</span>
                        <div>&nbsp;</div>
                        <p>Network Name: Smart Chain <br/> New RPC URL: https://bsc-dataseed.binance.org/ <br/> Chain ID: 56 <br/> Symbol: BNB <br/> Block Explorer URL: https://bscscan.com <br/>Network Name: Smart Chain</p>
                    </div>
                    </Tab>
                    <Tab eventKey="Step4" title="Step 4">
                    <img className="metastep"src={MetaStep4}></img>
                    <div className="instructions">
                        <h3>Now that you’re in the Pancake Swap exchange window, we’re going to need to search for and then select the $YUMMY token.</h3>
                        <p>Click on the “Select a Currency” button, and then enter the $YUMMY token contract: 0x05f2df7b3d612a23fe12162a6c996447dce728a5</p>
                    </div>
                    </Tab>
                    <Tab eventKey="Step5" title="Step 5">
                    <img className="metastep"src={MetaStep5}></img>
                    <div className="instructions">
                        <h3>Next, You should see Yummy in the drop down list:</h3>
                        <p>Click “Settings” at the top right, and adjust your slippage to 12.</p>
                    </div>
                    </Tab>
                    <Tab eventKey="Step6" title="Step 6">
                    <img className="metastep yummy"src={MetaStep6}></img>
                    <div className="instructions">
                        <h3>You are now ready to swap for Yummy Coin!</h3>
                        <p>Simply enter the amount that you want to buy and swap away!</p>
                        <p><strong>Important:</strong> You’ll be charged separately for Gas Fees, which is usually a single BNB fee that is under (or around) a dollar, so it’s helpful to always keep at least a few dollars in BNB at all times.</p>
                    </div>
                    </Tab>
                </Tabs> 
        );
}

export default LearnMetaWallet;
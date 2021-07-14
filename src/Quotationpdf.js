import React,{ useRef, useState} from 'react'
import './Qpdf.css'
import { Button } from '@progress/kendo-react-buttons';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { PDFExport} from '@progress/kendo-react-pdf';
function Quotationpdf() {
   const pdfExportComponent = useRef(null);
	const [layoutSelection, setLayoutSelection] = useState({ text: "A4", value: "size-a4"});
	
	const ddData = [{ text: "A4", value: "size-a4" },
	                { text: "Letter", value: "size-letter" },
									{ text: "Executive", value: "size-executive" }
								 ];

	const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  }

	const updatePageLayout = (event) => {
		setLayoutSelection(event.target.value);
	}
   return (
      <>

      <div className="box wide hidden-on-narrow">
      <div className="box-col">
         <h4>Select a Page Size</h4>
         <DropDownList
               data={ddData}
               textField="text"
               dataItemKey="value"
               value={layoutSelection}
               onChange={updatePageLayout}
         >	
         </DropDownList>
      </div>
      <div className="box-col">
         <h4>Export PDF</h4>
      <Button primary={true} onClick={handleExportWithComponent}>Quotation</Button>
      </div>
   </div>


      <div className="page-container hidden-on-narrow">
      <PDFExport ref={pdfExportComponent}>
      <div className='pdf-page'>
       
      <div className="col-sm-12 print-div">
      <div className="print-quot">
          <div className="row">
              <div className="col-sm-3 logo-div">
                      <img src="logo.png" style={{width:'100%'}} alt="logo"/>
              </div>
              <div className="col-sm-4 print-quot1">
                  <h1>Quotation</h1>
              </div>
             
              <div className="col-sm-5">
              <div className="print-quot3">
                  <div className="row">
                      <div className="col-sm-5 col-xs-4 pt-left">Date :</div>
                      <div className="col-sm-7 col-xs-8 pt-right">
                                                              Jul 13, 2021                                </div>
                  </div>
                
                  <div className="row">
                      <div className="col-sm-5 col-xs-4 pt-left">Quot# :</div>
                      <div className="col-sm-7 col-xs-8 pt-right">
                          ENT /Jul - 21/194                                </div>
                  </div>
              </div>
          </div>
          </div>
          </div>
      </div>
      <div className="row">
      <div className="col-sm-12">
  <h1 className="quot-hd">Equipment</h1>
</div>
  </div>    
  <div className="row print-detail">
  <div className="col-sm-6 left1">
      <div className="print-detail1">
          <h1 >Entema Al Shamal Gen. cont. Est</h1>
          <p className="m-0">Al-Jubail St P.O. Box 2816, Jubail 31951, Saudi Arabia<br/>
              <strong>Phone:</strong> 013 363 1210<br/>
              <strong>Email:</strong> info@entema-sa.com<br/>
              <strong>VAT No:</strong> 310005823700003</p>
      </div>
  </div>
  <div id="watermark">
                Not Approved
           </div>

<div className="col-sm-6 right1">
            <div className="print-detail3 pd3">
                <h1>Work Schedule</h1>
                <div className="row pd3-det">
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-5 pri-field-head">Valid</div>
                            <div className="col-sm-7 pri-field-data">
                                                            15 - 07 - 2021                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-5 pri-field-head">From</div>
                            <div className="col-sm-7 pri-field-data">
                                Entemasw                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-5 pri-field-head">User Mobile No.</div>
                            <div className="col-sm-7 pri-field-data">
                                0559258940                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>         

        <div className="row" >
        <div className="col-sm-12">
            <div className="print-detail3"style={{marginTop:'11px'}}>
                <h1>Client</h1>
                <div className="row pd3-det">
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-sm-4 pri-field-head">Name</div>
                            <div className="col-sm-8 pri-field-data">
                                Mohammed Safi                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-4 pri-field-head">Mobile No</div>
                            <div className="col-sm-8 pri-field-data">
                                0503549848                            </div>
                        </div>
            


                    </div>

                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-sm-4 pri-field-head">Company</div>
                            <div className="col-sm-8 pri-field-data">
                                Zahra A. Albaqshi Gen Cont Est.                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-4 pri-field-head">Email</div>
                            <div className="col-sm-8 pri-field-data">
                                Safi@zacoindus.com                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="row">
    <div className="col-sm-12">
        <div className="dash-pr">
            <div className="row">
               
                <div className="col-sm-9">
                                                    With reference to the above subject we are very much interested to supply and Hereby Quote our best reasonable price for the same.
                                </div>
            </div>
        </div>
    </div>
</div>   
<div className="row">
        <div className="col-sm-12 mt-3">
            <div className="">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Description</th>
                            <th>QTY</th>
                            <th>Price
                            </th>
                            <th>
                                mobilization &amp; demobilization                            </th>
                        </tr>
                    </thead>
                    <tbody>
                                                <tr>
                            <td>
                                1                            </td>
                            <td>
                                4*2 Toyota Pick up Without Driver                            </td>
                            <td>
                                1                            </td>
                            <td>
                                2500.00/month                            </td>

                            <td>
                                N/A                            </td>
                        </tr>
                                            </tbody>
                </table>
            </div>
        </div>
    </div>
    <div className="row">
    <div className="col-sm-12">
        <div className="dash-terms">
            <h1>Terms &amp; Conditions:</h1>
            
            <p>1. Above rate is applicable for 10 hours per day, 260 hours per month. 6 Days A week <br/>
2. Working less than 10 hours day will be considered as full working day.<br/>
3. Lubricants, top-up oil, repairs, daily maintenance, Service. and Consumables of the Equipment's shall be provide by Clien.<br/>
4. In case of non-availability of work or inadequate weather conditions, normal daily rate will be charged.<br/>
5. Payment terms will be 30 days after receipt of the Entema al-shamal invoice.<br/>
6. Above Rate is Exclusive of VAT .<br/>
7. Mobilization will be done immediately after receiving the P.O.<br/>
8. Our quotation valid for ten days from the date of this offers and is subject to the availability of manpower &amp; equipment, until receipt of the P.O.<br/>
9. All above mentioned conditions must be mentioned in your purchase order. Hope above quotation is made good and looking forward to get your valuable purchase order at the earliest. Your usual Cooperation would be highly appreciated.</p>
        </div>
    </div>
</div>

<div className="row">
        <div className="col-sm-12">
            <div className="bot-cl">
                Client has to return the same Quotation to Entema Al-shamal by Fax or Email after Confirmation Signature.
                <h1 className="quotation">Client Acceptance</h1>
                <h6 style={{fontSize:'12px',textAlign:'left'}}>(
                    Mohammed Safi)</h6>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="bot-cl2">
                            <div className="row">
                                <div className="col-sm-4 col-xs-4 bot-left">Name</div>
                                <div className="col-sm-8 col-xs-8 bot-right"></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 col-xs-4 bot-left">Title</div>
                                <div className="col-sm-8 col-xs-8 bot-right"></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 col-xs-4 bot-left">Date</div>
                                <div className="col-sm-8 col-xs-8 bot-right"></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 col-xs-4 bot-left">Signature</div>
                                <div className="col-sm-8 col-xs-8 bot-right"></div>
                            </div>

                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="bot-cl3">
                            <h4>For Entema Al Shamal Gen. cont. Est</h4>
                            <div className="bot-in">
                                Entemasw ,
                                    Manager                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    </div>
         
        </div>
        </PDFExport>
        </div> 
      </>
   )
}

export default Quotationpdf;

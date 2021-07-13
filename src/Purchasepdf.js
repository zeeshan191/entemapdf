import React,{ useRef, useState, useEffect } from 'react'
import './Ppdf.css'
import { Button } from '@progress/kendo-react-buttons';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { PDFExport} from '@progress/kendo-react-pdf';
function Purchasepdf() {
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
        <Button primary={true} onClick={handleExportWithComponent}>Purchasepdf</Button>
            </div>
     </div>
     
     <div className="page-container hidden-on-narrow">
     <PDFExport ref={pdfExportComponent}>
     <div className='pdf-page'>
     <div className="col-sm-12 print-div">
     <div className="print-quot">
         <div className="row">
             <div className="col-sm-3 logo-div">
                     <img src="logo.png" style={{width:'100%'}}/>
             </div>
             <div className="col-sm-4 print-quot1">
                 <h1>PURCHASE ORDER</h1>
             </div>
            
             <div className="print-quot6">
             <div className="row">
                 <div className="col-sm-5 col-xs-4 pt-left">Doc No</div>
                 <div className="col-sm-7 col-xs-8 pt-right">SUBCO / FRM -
                     56                                </div>
             </div>

             <div className="row">
                 <div className="col-sm-5 col-xs-4 pt-left">Date</div>
                 <div className="col-sm-7 col-xs-8 pt-right">
                                                         Jun 15, 2021                                </div>
             </div>

             <div className="row">
                 <div className="col-sm-5 col-xs-4 pt-left">Rev. No</div>
                 <div className="col-sm-7 col-xs-8 pt-right">
                     56                                </div>
             </div>


         </div>
         </div>
         </div>
     </div>

     <div className="row print-detail">
        <div className="col-sm-6 left1">
            <div className="print-detail1">
                <h5 style={{fontSize:'14px',textAlign:'left'}}>Invoice To</h5>
                <h1>Entema Al Shamal Gen. cont. Est</h1>
                <p>Al-Jubail St P.O. Box 2816, Jubail 31951, Saudi Arabia<br/>
                    <strong>Phone:</strong> 013 363 1210<br/>
                    <strong>Email:</strong> info@entema-sa.com<br/>
                    <strong>VAT No:</strong> 310005823700003</p>
            </div>
        </div>

        <div className="col-sm-6 right1">
            <div className="print-detail3 pd3">
                <h1>Work Order</h1>
                <div className="row pd8-det">
                    <div className="col-sm-5 left1">
                        <div className="row">
                            <div className="col-sm-7 pri-field-head">Number</div>
                            <div className="col-sm-5 pri-field-data pon">PO-
                                56                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-7 pri-field-head">Project</div>
                            <div className="col-sm-5 pri-field-data">
                                Hawaiya                            </div>
                        </div>


                    </div>

                    <div className="col-sm-7 right1">

                        <div className="row">
                            <div className="col-sm-7 pri-field-head">Quatation Ref</div>
                            <div className="col-sm-5 pri-field-data">
                                Global-2                            </div>
                        </div>

                    </div>



                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-6 pri-field-head">Mode / Terms Payment</div>
                            <div className="col-sm-6 pri-field-data">
                                30 Days After the Invoice Received .                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    </div>


    <div className="row" style={{marginTop:'10px'}}>
    <div className="col-sm-8 left1">
        <div className="print-vendor">
            <div className="row">
                <div className="col-sm-8 left1">
                    <div className="row ven-row">
                        <div className="col-sm-4 pri-field-head pv3">Vendor</div>
                        <div className="col-sm-8 pri-field-data p-data" style={{fontSize:'13px',fontWeight:'500'}}>
                            Global Horizon Contracting Est.                            </div>
                    </div>

 </div>

<br/>
                <div className="col-sm-4 right1">
                    <div className="row pvc">
                        <div className="col-sm-6 pri-field-head">Code</div>
                        <div className="col-sm-6 pri-field-data p-data1">
                            VEN29                            </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    <div className="row pv2">
                        <div className="col-sm-3 pri-field-head">Address</div>
                        <div className="col-sm-9 pri-field-data">
                            Dammam                            </div>
                    </div>

                </div>
            </div>

            <div className="row">
                <div className="col-sm-5 left1">
                    <div className="row">
                        <div className="col-sm-6 pri-field-head pv4">Ph</div>
                        <div className="col-sm-6 pri-field-data">
                            0597529115                            </div>
                    </div>

                </div>


                <div className="col-sm-7 right1">
                    <div className="row">
                        <div className="col-sm-7 pri-field-head">Contact Person</div>
                        <div className="col-sm-5 pri-field-data">
                            Parvaiz Iqbal                            </div>
                    </div>

                </div>

            </div>


            <div className="row">
                <div className="col-sm-5 left1">
                    <div className="row">
                        <div className="col-sm-5 pri-field-head pv4">Mobile</div>
                        <div className="col-sm-7 pri-field-data">
                            0597529115                            </div>
                    </div>

                </div>


                <div className="col-sm-7 right1">
                    <div className="row">
                        <div className="col-sm-3 pri-field-head">VAT</div>
                        <div className="col-sm-9 pri-field-data">
                            310363680100003                            </div>
                    </div>

                </div>

            </div>

            <div className="row">
                <div className="col-sm-7 left1">
                    <div className="row">
                        <div className="col-sm-5 pri-field-head pv1">Email</div>
                        <div className="col-sm-7 pri-field-data">
                            globalhorizon.rental@gmail.com                            </div>
                    </div>

                </div>
            </div>


        </div>
    </div>



    <div className="col-sm-4 right1">
        <div className="print-detail5 pd3a">
            <h1>Work Schedule</h1>

            <div className="pvw">
                <div className="row">
                    <div className="col-sm-6 pri-field-head">Start</div>
                    <div className="col-sm-6 pri-field-data">
                                                    03 - 06 - 2021                        </div>
                </div>

                <div className="row">
                    <div className="col-sm-6 pri-field-head">Completion</div>
                    <div className="col-sm-6 pri-field-data">
                                                    03 - 08 - 2021                        </div>
                </div>

                <div className="row">
                    <div className="col-sm-6 pri-field-head">Location</div>
                    <div className="col-sm-6 pri-field-data">
                        Hawaih                        </div>
                </div>
            </div>
        </div>

    </div>

</div>
<div className="row">
        <div className="col-sm-12">
            <div className="dash-pr">
                <div className="row">
                    <div className="col-sm-3 pri-field-head">Description of Work</div>
                    <div className="col-sm-9 pri-field-data">
                        Hire of rental Dump truck with driver . Qnty 1.                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="row">
    <div className="col-sm-12">
        <div className="print-table9">
            <table>
                <thead>
                    <tr>
                        <th>Sr#</th>
                        <th>Description </th>
                        <th> Unit</th>
                        <th>QTY</th>
                        <th>Unit rate (Sar)</th>
                        <th>Amount (sar)</th>
                        <th>Remarks</th>
                    </tr>
                </thead>
                <tbody>
                                            <tr>
                        <td>
                            1                            </td>
                        <td>
                            Dump Truck with Driver .Qnty 1                            </td>
                        <td>
                            month                            </td>
                        <td>
                            1                            </td>
                        <td>
                            14000.00                            </td>
                        <td>
                            14000                            </td>
                        <td>
                        </td>
                    </tr>
                                        </tbody>
            </table>
        </div>

    </div>
</div>
<div className="row">
        <div className="col-6">
            <div className="row mt-2">
                <div className="col-sm-5 pri-field-head">Mobilization Date</div>
                <div className="col-sm-7 ">
                                                02 - 06 - 2021                </div>
            </div>
        </div>

        <div className="col-6">
            <div className="print-total row mr-0">
                <div className="col-6 tot-left tl1">TOTAL sar</div>
                <div className="col-6 tot-right tr1" id="total">
                    14000                </div>
                
                                <div className="col-6 col-xs-6 tot-left">s.tAX/vat/rgst 0%</div>
                <div className="col-6 col-xs-6 tot-right">
                    0                </div>
                <div className="col-sm-6 col-xs-6 tot-left tl2">gRAND tOTAL (sAR)</div>
                <div className="col-sm-6 col-xs-6 tot-right tr2" id="grandtotal">
                    14000                </div>
            </div>
            <div className="clearfix"></div>

        </div>

    </div>
    <div className="row">
    <div className="col-sm-12">
        <div className="print-total7">
            <h4><span>TOTAL (IN WORDS ):<span id="total_word" style={{display:'inline'}}>fourteen thousand </span> SAR <span id="total_decimal" style={{display:'inline'}}></span>Only</span>
            </h4>
        </div>
    </div>
</div>

<div className="row">
        <div className="col-sm-12">
            <div className="dash-terms mt-0 pt-0">
                <h1 className="pl-0">INSTRUCTIONS:</h1>
                                <p>                1. Payment shall be made for the quantities executed as per unit rates given above.<br/>
                2. Work Order number and date must be quoted on all correspondence.<br/>
                3. This order is subject to the terms and conditions set out on the face and Annexure -A<br/>
                4. The acceptance copy must be signed by vender or by its representative ( on vender’s behalf) on the face and Annexure - A<br/>
                5. This Work Order is subject to the cancellation unless the subcontractor returns one copy signed with confirmation that all terms and conditions are accepted.<br/>
                6. The following attachments form an integral part of this work Order.                </p>
            </div>
        </div>

        <div className="col-sm-12">
            <div className="dash-terms mt-0 pt-0">
                <h1 className="pl-0">Terms of delivery:</h1>
                                <p>                    1. Lubricants, top-up oil, repairs, daily maintenance, Service. and Consumables of the Equipment shall be provide by Vender.<br/>
2. In case of breakDown or Maintenance, Vendor/Supplier shall provide a replacement of equipment immediately at no extra cost.  in case of where Vendor/Supplier falls to complete Entema shall impose a delay penalty of 2.5 % per week the P O value , up to maximum of 10 % of P O Value.               </p>
            </div>
        </div>

        <div className="col-sm-12">
            <div className="dash-terms mt-0 pt-0">
                <h1 className="pl-0">Terms &amp; Conditions:</h1>
                                <p>                1. Above rate is applicable for 10 hours per day, 6 days a week, 260 hours per Month.<br/>
2. Working Duration: 3  Months Extendable.<br/>
3. Supply Food scope of Vendor,and  accommodation &amp; Transportation scope Entema al-shamal.<br/>
4. Above Rate is exclusive of VAT.<br/>
5. If you need any clarification on above matter or any assistance please feel free to contract undersigned.<br/>
6. Vendor has to return the same purchase order to Entema Al-shamal by Fax or Email after Confirmation Signature.                </p>
            </div>
        </div>
    </div>


    <div className="row">
    <div className="col-12" style={{maxWidth:'97%'}}>
        <div className="bot-cl5">
            <div className="row">
                <div className="col-sm-6">
                    <div className="bot-cl6">
                        <h1>Accepted by</h1>
                        <div className="row">
                            <div className="col-sm-5 col-xs-6 bot-left">Signature</div>
                            <div className="col-sm-7 col-xs-6 bot-right"></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-5 col-xs-6 bot-left">Name &amp; Title</div>
                            <div className="col-sm-7 col-xs-6 bot-right"></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-5 col-xs-6 bot-left">Date</div>
                            <div className="col-sm-7 col-xs-6 bot-right"></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12" style={{textAlign:'center',fontSize: '13px'}}>(
                                Global Horizon Contracting Est.)</div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="bot-cl10">
                        <h1>Issued by</h1>
                        <h5>Authorised Signatory<br/>(Entema Al Shamal Gen. cont. Est)</h5>
                        <h4></h4>
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

export default Purchasepdf;

import React from 'react';
import qr from '../assets/scanner.jpeg';

const Donate = ({ content }) => {
  return (
    <section className="page">
      <div className="section-header">
        <h2>{content.title}</h2>
        <p className="section-subtitle">{content.subtitle}</p>
      </div>

      <div className="donate-layout">
        <div className="donate-details">
          <h3>{content.bankTitle || 'Bank Transfer'}</h3>
          <ul className="bank-details">
            <li>
              <strong>Bank Name:</strong> {content.bank.name}
            </li>
            <li>
              <strong>Account Name:</strong> {content.bank.accountName}
            </li>
            <li>
              <strong>Account Number:</strong> {content.bank.accountNumber}
            </li>
            <li>
              <strong>IFSC Code:</strong> {content.bank.ifsc}
            </li>
            <li>
              <strong>Branch:</strong> {content.bank.branch}
            </li>
          </ul>

          <h3>{content.upiTitle || 'UPI Transfer'}</h3>
          <p>
            UPI ID: <strong>{content.upi.id}</strong>
          </p>
          <p>{content.upi.note}</p>
        </div>

        <div className="donate-qr">
          <h3>{content.qrTitle}</h3>
          <img src={qr} alt="MDSCT UPI QR Code" />
        </div>
      </div>
    </section>
  );
};

export default Donate;




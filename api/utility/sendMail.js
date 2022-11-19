import nodemailer from "nodemailer";

/**
 * Send Account Activation
 * @param {*} to
 * @param {*} data
 */

export const sendActivationLink = async (to, data) => {
  try {
    // create trams transport
    let transport = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASS,
      },
    });

    // send activation mail
    await transport.sendMail({
      from: `Tiktok pro <${process.env.MAIL_ID}>`,
      subject: `${data.code} is your verification code`,
      to: to,
      text: "check your link",
      html: `
      
        <body style="padding: 0; margin: 0"> <center class="wrapper" style=" width: 100%; table-layout: fixed; background-color: #ffffff; padding-top: 30px; padding-bottom: 30px; " > <table class="main" style=" background-color: #fff; color: rgb(37, 36, 36); width: 100%; max-width: 430px; height: 410px; margin: 0 auto; border-spacing: 0; font-family: sans-serif; padding: 20px; " > <!-- Header section --> <tr> <td height="16" style="padding: 0; background-color: #fff" class="header-section" > <table width="100%" style="border-spacing: 0"> <tr> <td class="two-collum" style="padding: 0; text-align: left"> <table width="100%" style="border-spacing: 0"> <tr> <td class="colum1" style=" padding: 0; width: 100%; max-width: 80px; height: 100%; display: inline-block; vertical-align: top; " > <a href="http://localhost:3000/" style="text-decoration: none" > <img style="border: 0; padding-top: 10px" width="130" src="https://ci3.googleusercontent.com/proxy/S4FPvjJpyUFmZII6kpQwvTcapalWlaeFqtfI0X3BFTrjOGMOXvLX96peHHRmfFzX8oHrSPXRoXFFvoL22SrMCE7ujmmKOqZ0P-59LonDGVEZZuiqy3frErtYtJn3Fp8I6hPUwq5fXYoM=s0-d-e1-ft#http://p16-tiktokcdn-com.akamaized.net/obj/tiktok-obj/f70f9d0dc867d6c71ce2cd684a0ffff0" alt="twitter-logo" border="0" /> </a> </td> </tr> </table> </td> </tr> </table> </td> </tr> <!-- body Section --> <tr> <td class="body-section" style="padding: 0; background-color: #fff"> <table width="100%" style="border-spacing: 0; padding: 0 10px"> <tr> <td class="recever-name" style="padding: 0"> <p style="font-size: 25px; color: #222222"> <b>Verification Code </b> </p> </td> </tr> </table> </td> </tr> <tr> <td class="body-section" style="padding: 0; background-color: #fff"> <table width="100%" style="border-spacing: 0; padding: 0 10px"> <tr> <td class="message-name" style="padding: 0"> <p style="color: #4e5058; margin: 0; font-size: 16px"> To verify your account, enter this code in TikTok: </p> <h3><strong>${data.code}</strong></h3> </td> </tr> </table> </td> </tr> <tr></tr> <tr> <td class="body-section" style="padding: 0; background-color: #fff"> <table width="100%" style="border-spacing: 0; padding: 0 10px"> <tr> <td class="message-name" style="padding: 0"> <p style=" color: #4e5058; margin: 0; font-size: 16px; margin-top: 15px; " > Verification codes expire after 48 hours. </p> </td> </tr> </table> </td> </tr> <tr> <td class="body-section" style="padding: 0; background-color: #fff"> <table width="100%" style="border-spacing: 0; padding: 0 10px"> <tr> <td class="message-name" style="padding: 0"> <p style="margin-bottom: 10px; color: #4e5058; font-size: 16px" > If you didn't request this code, you can ignore this message. </p> </td> </tr> </table> </td> </tr> <tr> <td class="body-section" style="padding: 0; background-color: #fff"> <table width="100%" style="border-spacing: 0; padding: 0 10px"> <tr> <td class="message-name" style="padding: 0"> <p style="margin-bottom: 10px; color: #4e5058; font-size: 16px" > TikTok Support Team </p> <p style="margin-bottom: 10px; color: #4e5058; font-size: 16px" > TikTok Help Center: <a style="color: #005b9e; font-size: 16px" href="#" >https://support.tiktok.com/</a > </p> </td> </tr> </table> </td> </tr> <tr> <td class="body-section" style="padding: 0; background-color: #fff"> <table width="100%" style="border-spacing: 0; padding: 0 10px"> <tr> <td class="message-name" style="padding: 0"> <p style=" margin-bottom: 10px; color: rgb(157, 157, 157); font-weight: 300; margin: 0; font-size: 15px; " > Have a question? </p> <p style=" margin-bottom: 10px; color: rgb(157, 157, 157); font-weight: 300; margin: 0; font-size: 15px; " > Check out our help center or contact us in the app using <strong style=" margin-bottom: 10px; color: #005bb7; font-weight: 600; margin: 0; font-size: 15px; " >Settings > Report a Problem.</strong > </p> </td> </tr> </table> </td> </tr> <tr> <td class="body-section" style="padding: 0; background-color: #fff"> <table width="100%" style="border-spacing: 0; padding: 0 10px"> <tr> <td class="message-name" style="padding: 0"> <p style=" margin-bottom: 10px; color: rgb(157, 157, 157); font-weight: 300; margin: 15px 0px; font-size: 15px; " > This is an automatically generated email. Replies to this email address aren't monitored. </p> </td> </tr> </table> </td> </tr> <tr> <td class="body-section" style="padding: 0; background-color: #fff"> <table width="100%" style="border-spacing: 0; padding: 0 10px"> <tr> <td class="message-name" style="padding: 0"> <p> <a style=" color: rgb(157, 157, 157); font-weight: 300; margin: 0; font-size: 12px; " href="#" >Privacy Policy</a > </p> <p style=" color: rgb(157, 157, 157); font-weight: 300; margin: 0; font-size: 12px; " > TikTok, 10100 Venice Bivd, Culver City, CA 90232 </p> </td> </tr> </table> </td> </tr> <!-- body Section --> </table> </center> </body>

      `,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Sent Forgot Password Link
 * @param {*} to
 * @param {*} data
 */

export const sentForgotPasswordLink = async (to, data) => {
  try {
    // create trams transport
    let transport = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASS,
      },
    });

    // send activation mail
    await transport.sendMail({
      from: `Tiktok pro <${process.env.MAIL_ID}>`,
      subject: `${data.code} is your verification code`,
      to: to,
      text: "check your link",
      html: `
      
      <body style="padding:0;margin:0;">
    <center class="wrapper" style="width:100%;table-layout:fixed;background-color:#ffffff;padding-top:30px;padding-bottom:30px;">
      <table class="main" style="background-color:#fff;color:rgb(37, 36, 36);width:100%;max-width:430px; height: 410px; margin:0 auto;border-spacing:0;font-family:sans-serif;padding: 20px;">
        <!-- Header section -->
        <tr>
          <td height="16" style="padding:0;background-color: #fff;" class="header-section">
            <table width="100%" style="border-spacing:0;">
              <tr>
                <td class="two-collum" style="padding:0;text-align:left;">
                  <table width="100%" style="border-spacing:0;">
                    <tr>
                      <td class="colum1" style="padding:0;width:100%;max-width:80px;height:100%;display:inline-block;vertical-align:top;">
                        <a href="http://localhost:3000/" style="text-decoration:none;">
                          <img style="border:0;padding-top: 10px; margin-bottom: 10px;" width="130"  src="https://ci3.googleusercontent.com/proxy/S4FPvjJpyUFmZII6kpQwvTcapalWlaeFqtfI0X3BFTrjOGMOXvLX96peHHRmfFzX8oHrSPXRoXFFvoL22SrMCE7ujmmKOqZ0P-59LonDGVEZZuiqy3frErtYtJn3Fp8I6hPUwq5fXYoM=s0-d-e1-ft#http://p16-tiktokcdn-com.akamaized.net/obj/tiktok-obj/f70f9d0dc867d6c71ce2cd684a0ffff0" alt="twitter-logo" border="0">
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- body Section -->
        <tr>
          <td class="body-section" style="padding:0;background-color: #fff;">
            <table width="100%" style="border-spacing:0;padding: 0 10px;">
              <tr>
                <td class="recever-name" style="padding:0;">
                  <p style=" font-size: 25px; color: #222222; margin-bottom: 50px;"><b>Change your password
                  </b></p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td class="body-section" style="padding:0;background-color: #fff;">
            <table width="100%" style="border-spacing:0;padding: 0 10px;">
              <tr>
                <td class="message-name" style="padding:0;">
                  <p style="color: rgb(157, 157, 157); margin: 0; font-size: 16px;">
                    This is an automatically generated email, please do not reply.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td class="body-section" style="padding:0;background-color: #fff;">
            <table width="100%" style="border-spacing:0;padding: 0 10px;">
              <tr>
                <td class="message-name" style="padding:0;">
                  <p style="color: #4e5058; margin-top: 20px; font-size: 16px;">
                    Hi ${data.name}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td class="body-section" style="padding:0;background-color: #fff;">
            <table width="100%" style="border-spacing:0;padding: 0 10px;">
              <tr>
                <td class="message-name" style="padding:0;">
                  <p style="color: #4e5058; margin-top: 20px; font-size: 16px;">
                    To change your password, enter this verification code in the TikTok app:</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td class="body-section" style="padding:0;background-color: #fff;">
            <table width="100%" style="border-spacing:0;padding: 0 10px;">
              <tr>
                <td class="message-name" style="padding:0;">
                  <p style=" margin-top: 20px; font-size: 20px;">
                   <Strong>${data.code}</Strong></p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td class="body-section" style="padding:0;background-color: #fff;">
            <table width="100%" style="border-spacing:0;padding: 0 10px;">
              <tr>
                <td class="message-name" style="padding:0;">
                  <p style="color: #4e5058; margin-top: 20px; font-size: 16px;">
                    If you didn't request this change, ignore this message and your password will remain the same.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td class="body-section" style="padding:0;background-color: #fff;">
            <table width="100%" style="border-spacing:0;padding: 0 10px;">
              <tr>
                <td class="message-name" style="padding:0;">
                  <p style="color: #4e5058; font-size: 16px;">
                    Best</p>
                    <p style="color: #4e5058; font-size: 16px;"> TikTok Support Team</p>
                    <p style="color: #4e5058; font-size: 16px;"> TikTok Help Center: <a href="#">https://support.tiktok.com/</a></p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
        <tr>
          <td class="body-section" style="padding:0;background-color: #fff;">
            <table width="100%" style="border-spacing:0;padding: 0 10px;">
              <tr>
                <td class="message-name" style="padding:0;">
                    <p style="margin-bottom : 10px; color: rgb(157, 157, 157); font-weight: 300; margin: 0; font-size: 15px;">Have a question?</p>
                    <p style="margin-bottom : 10px; color: rgb(157, 157, 157); font-weight: 300; margin: 0; font-size: 15px;">Check out our help center or contact us in the app</p>
                    <p style="margin-bottom : 10px;color:#005b9e; font-weight: 300; margin: 0; font-size: 15px;">using <Strong>Settings > Report a Problem.</Strong></p>
                </td>
              </tr>
            </table>
          </td>
        <tr>
          <td class="body-section" style="padding:0;background-color: #fff;">
            <table width="100%" style="border-spacing:0;padding: 0 10px;">
              <tr>
                <td class="message-name" style="padding:0;">
                    <p style="margin-bottom : 10px ; color: rgb(157, 157, 157); font-weight: 300; margin: 15px 0px; font-size: 15px;">This is an automatically generated email. Replies to this email address aren't monitored.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td class="body-section" style="padding:0;background-color: #fff;">
            <table width="100%" style="border-top: 1px solid #ddd; padding: 0 10px;">
              <tr>
                <td class="message-name" style="padding:0;">
                  <p style="color: rgb(157, 157, 157); font-size: 12px;">This email was generated for ${data.username}. <br/> Privacy Policy <br/>TikTok, 10100 Venice Bivd, Culver City, CA 90232</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- body Section -->
      </table>
    </center>
</body>

      `,
    });
  } catch (error) {
    next(error);
  }
};

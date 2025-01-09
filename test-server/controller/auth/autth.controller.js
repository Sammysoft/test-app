import {
    successMessage,
    errorMessage,
    emailValidatorHelper,
  } from "../../Helpers/utils.js";
  import { isRequired } from "../../Helpers/required.js";
  import {
    getUserByEmailService,
    verifiedEmailService,
  } from "../../services/auth.service.js";
  import { authRegisterAccountService } from "../../services/auth.service.js";
  import bcrypt from "bcrypt";
  import { jwtService } from "../../services/auth.service.js";
  import {
    sendMailVerifiedService,
    verifyEmailService,
  } from "../../services/mailing.service.js";
  import { getUserService } from "../../services/user.service.js";

  export const registerRequiredController = (req, res, next) => {
    const data = {
      email: req?.body?.email,
      password: req?.body?.password,
      fullName: req?.body?.fullName,
      phone: req?.body?.phone,
    };

    if (!isRequired(data, res)) return;
    if (!emailValidatorHelper(req.body.email, res)) return;
    next();
  };

  export const authRegisterUserExists = async (req, res, next) => {
    const user = await getUserService({ email: req.body.email });
    if (user) return errorMessage(409, "This user already exists", user._id)(res);
    return next();
  };

  export const authRegisterController = async (req, res, next) => {
    const { email, password, fullName, phone, isAdmin } = req.body;
    let user = await authRegisterAccountService(
      {
        email,
        password,
        fullName,
        phone,
        isAdmin,
      },
      res
    );
    if (!user) return errorMessage(400, "Could not register user", null)(res);
    if (user) {
      let isVerified = await verifyEmailService(user._id);
      if (isVerified)
        return successMessage(
          200,
          "Account created successfully, check your mail to verify email address",
          { email: user.email }
        )(res);
      if (!isVerified)
        return errorMessage(400, "Could not verify Account", null)(res);
    }
  };

  export const loginRequiredController = (req, res, next) => {
    const data = {
      email: req.body.email,
      password: req.body.password,
    };

    if (!isRequired(data, res)) return;
    next();
  };

  export const authLoginController = async (req, res, next) => {
    let user = await getUserByEmailService(req.body.email, res);
    if (!user) return;
    let decrypt = await bcrypt.compareSync(req.body.password, user.password);
    if (!decrypt) return errorMessage(401, "Invalid Credentials", req.body)(res);

    let id = user;

    const token = jwtService({
      id: id?._id,
      email: id?.email,
      isAdmin: id?.isAdmin,
    });
    return successMessage(200, "Logged in", { token })(res);
  };

  export const verifyEmailRequiredController = async (req, res, next) => {
    const data = {
      userID: req.params.userID,
    };
    if (!isRequired(data, res)) return;
    return next();
  };

  export const VerifyEmailController = async (req, res) => {
    let verified = await verifiedEmailService(req.params.userID);
    await sendMailVerifiedService(
      "samuelbibilade@gmail.com",
      verified.email,
      verified.fullName,
      (err) => {
        if (err) {
          console.log("Mail not sent");
        } else {
          console.log("Mail sent");
        }
      }
    );
    if (verified)
      return successMessage(200, "User Email Verified", {
        isVerified: verified.isVerified,
      })(res);
    if (!verified)
      return errorMessage(400, "Could not verify user email", null)(res);
  };





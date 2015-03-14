/*
 * Remote PwdHash
 * A JavaScript implementation of the PwdHash hashing algorithm.
 * Version 1.0 Copyright (C) Stanford University 2004-2006
 * Author: Collin Jackson
 * Other Contributors: Dan Boneh, John Mitchell, Nick Miyake, and Blake Ross
 * Distributed under the BSD License
 * See http://crypto.stanford.edu/PwdHash for more info.
 * Requires the Javascript MD5 library, available here: http://pajhome.org.uk/crypt/md5
 */

/*
 * Initialize page with default hashing parameters.
 */
function Init() {
  document.hashform.domain.value = "http://www.example.com/";
  document.hashform.sitePassword.value = "";
  document.hashform.siteHashLen.value = "16";
  document.hashform.hashedPassword.value = "Press Generate";
  document.hashform.hashedPassword.disabled = true;
}

/*
 * Returns a conforming hashed password generated from the form's field values.
 */
function Generate()
{
  var uri = document.hashform.domain.value;
  var domain = (new SPH_DomainExtractor()).extractDomain(uri);
  var data = document.hashform.sitePassword.value;
  var len = document.hashform.siteHashLen.value;
  var spChars = document.hashform.siteNonAlpha.checked;
  var result = new String(new SPH_HashedPassword(data, len, domain, spChars));
  return result;
}

/*
 * Obtain a conforming hashed password and put it in the hashed password field
 */
function GenerateToTextField()
{
  document.hashform.hashedPassword.value = Generate();
}

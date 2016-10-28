function GetUTMValues()
{
  if (g_cMode = "0")
  {
    var oForm = document.forms[0];
      
    cUTMSourceValue = GetURLParamValue("utm_source");
      oForm.UDF1012.value = cUTMSourceValue;
    
    cUTMMediumValue = GetURLParamValue("utm_medium");
      oForm.UDF1013.value = cUTMMediumValue;
    
    cUTMCampaignValue = GetURLParamValue("utm_campaign");
      oForm.UDF1014.value = cUTMCampaignValue;

    cUTMContentValue = GetURLParamValue("utm_content");
      oForm.UDF1016.value = cUTMContentValue;  

    cOTMContentValue = GetURLParamValue("otm_content");
      oForm.UDF1019.value = cOTMContentValue;

    cOTMCampaignValue = GetURLParamValue("otm_campaign");
      oForm.UDF1020.value = cOTMCampaignValue;

    cOTMSourceValue = GetURLParamValue("otm_source");
      oForm.UDF1017.value = cOTMSourceValue;
 
    cOTMMediumValue = GetURLParamValue("otm_medium");
      oForm.UDF1018.value = cOTMMediumValue;
    
    //console.log(oForm.UDF1012.value);
    //console.log(oForm.UDF1013.value);
    //console.log(oForm.UDF1014.value);
    //console.log(oForm.UDF1016.value);
    //console.log(oForm.UDF1017.value);
    //console.log(oForm.UDF1018.value);
    //console.log(oForm.UDF1019.value);
    //console.log(oForm.UDF1020.value);
  }
}
GetUTMValues();
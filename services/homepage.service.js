import http from './index';
// import { setDownloadProgress, setUploadProgress } from '@/redux/actions/app.reducer'

// axios option arguments
function setOptions(
  id,
  appKey,
  cancelToken,
  withProgress) {
  const options = {
    headers: {
      'privilege': id
    },
    cancelToken: cancelToken?.token
  };

  if (appKey) options.headers['App-Key'] = appKey

//   if (withProgress) {
// 		if (withProgress === 'download') {
// 			options.onDownloadProgress = function(progressEvent) {
// 				store.dispatch(setDownloadProgress(progressEvent))
// 			}
// 		}
// 		if (withProgress === 'upload') {
// 			options.onUploadProgress = function(progressEvent) {
// 				store.dispatch(setUploadProgress(progressEvent))	
// 			}
// 		}
// 	}

  return options;
}

/* --------------------------------- Promise Callbacks --------------------------------- */
export const doPromiseResolve = (res, { ...setterStates }) => {
  // apakah balikan dari mockup
  if (res.__esModule) {
    const setter = { ...setterStates }
    setter.setOptionBranch(res.default[0].branch)
  }
  else {
    const setter = { ...setterStates }, endpoint = res.config.url;

    switch (endpoint) {
      case '/wp':
        // do something here
        break;
      default:
        break;
    };
  }
}

export const doPromiseReject = (err, { ...setterStates }) => {
  const setter = { ...setterStates }, endpoint = err?.config?.url;
  let message
  console.log('ERROR: ', err)

  // START - finding error message
  if (err.response) {
    if (err.response.data) {
      if (err.response.data.message) message = err.response.data.message
      else if (err.response.data.engMessage) message = err.response.data.engMessage
      else if (err.response.data.messageEng) message = err.response.data.messageEng
      else if (err.response.data.idnMessage) message = err.response.data.idnMessage
      else if (err.response.data.messageIdn) message = err.response.data.messageIdn
    } else message = err.response.message
  } else message = err.message
  // END

  // START - set notif feedback
  switch (endpoint) {
    case '/wp':
      break;
    default:
      break;
  };
  // END
}


/* --------------------------------- Service Methods --------------------------------- */
// read_latest
async function getDataCampuran(data) {
  return await http.get('/wp', data, setOptions(30))
};

export default { getDataCampuran };
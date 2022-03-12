import React, { useEffect, useState } from 'react';
import { Builder } from '@builder.io/react';
import appState from '@builder.io/app-context';
import { useObserver } from 'mobx-react'


const PreviewButton = () => {
  console.log('preview',appState)


  const openPreview = () => {
    console.log(appState)
    var w = 1030,
      h = 844; // default sizes
    if (window.screen) {
      w = (window.screen.availWidth * 60) / 100;
      h = (window.screen.availHeight * 60) / 100;
    }
    // TODO: get previewURL form appState
    window.open(
      `${window.location.host}/api/preview`,
      '_blank',
      'toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=' + w + ',height=' + h
    );
  }
 
  return useObserver(() => {
    console.log('token', (appState as any)?.user?.authToken);
    return(
    <div>
      <button onClick={openPreview}>Preview</button>
    </div>
    )
  })
}

const Root = () => {
  return (
    // <CookiesProvider>
      <PreviewButton />
    // </CookiesProvider>
  );
}


Builder.register('editor.toolbarButton', {
  component: PreviewButton
})
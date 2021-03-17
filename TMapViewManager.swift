//
//  TMapViewManager.swift
//  TMapApp
//
//  Created by Joseph Kim on 2020/12/28.
//

import Foundation

@objc(TMapViewManager)
class TMapViewManager: RCTViewManager {
  override func view() -> UIView! {
    let label = UILabel()
    label.text = "Swift Counter"
    label.textAlignment = .center
    return label
  }
  
  override static func requiresMainQueueSetup() -> Bool {
      return true
    }
  
}

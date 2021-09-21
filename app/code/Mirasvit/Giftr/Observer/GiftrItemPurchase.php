<?php
/**
 * Mirasvit
 *
 * This source file is subject to the Mirasvit Software License, which is available at https://mirasvit.com/license/.
 * Do not edit or add to this file if you wish to upgrade the to newer versions in the future.
 * If you wish to customize this module for your needs.
 * Please refer to http://www.magentocommerce.com for more information.
 *
 * @category  Mirasvit
 * @package   mirasvit/module-gift-registry
 * @version   1.2.34
 * @copyright Copyright (C) 2020 Mirasvit (https://mirasvit.com/)
 */



namespace Mirasvit\Giftr\Observer;

use Magento\Framework\Event\Observer;
use Magento\Framework\Event\ObserverInterface;


class GiftrItemPurchase implements ObserverInterface
{
    /**
     * @var \Mirasvit\Giftr\Model\PurchaseFactory
     */
    private $purchaseFactory;

    /**
     * @param \Mirasvit\Giftr\Model\PurchaseFactory $purchaseFactory
     */
    public function __construct(
        \Mirasvit\Giftr\Model\PurchaseFactory $purchaseFactory
    ) {
        $this->purchaseFactory = $purchaseFactory;
    }

    /**
     * @param Observer $observer
     * @return void
     */
    public function execute(Observer $observer)
    {
        $this->purchaseFactory->create()->createFromQuoteAndItem($observer->getQuote(), $observer->getItem());
    }
}
<?php

namespace Inspire\Menu\Repositories\Caches;

use Inspire\Base\Repositories\Caches\CacheDecorator;
use Inspire\Base\Services\Caches\CacheInterface;
use Inspire\Menu\Repositories\MenuRepository;

/**
 * Class PostCacheDecorator
 *
 * @package \Inspire\Menu\Repositories\Caches
 */
class MenuCacheDecorator extends CacheDecorator implements MenuRepository
{
    /**
     * @var PostRepository
     */
    protected $repository;

    /**
     * @var CacheInterface
     */
    protected $cache;

    /**
     * PostCacheDecorator constructor.
     *
     * @param PostRepository $repository
     * @param CacheInterface $cache
     */
    public function __construct(MenuRepository $repository, CacheInterface $cache)
    {
        $this->repository = $repository;
        $this->cache = $cache;
    }
}
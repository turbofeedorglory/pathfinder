<?php


namespace Exodus4D\Pathfinder\Controller\Api\Rest;

class MapSystems extends AbstractRestController {

    function beforeroute(\Base $f3, $params) : bool {
        return true;
    }

    /**
     * @param \Base $f3
     * @param       $params
     * @throws \Exception
     */
    public function get($f3 = NULL, $params){
        $mapId = $params['id'];

        $map = \Exodus4D\Pathfinder\Model\Pathfinder\AbstractPathfinderModel::getNew('MapModel');
        $map->getById($mapId);

        $connections = $map->getConnections(null, 'wh');

        foreach($connections as $connection){
            $output[$connection->target->systemId] = $connection->target->alias;
            $output[$connection->source->systemId] = $connection->source->alias;
        }
        header('Content-Type: application/json');
        $this->out($output);
    }
}
